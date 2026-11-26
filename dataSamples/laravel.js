globalRoutines.laravel = () => {
    let quizArray = [
        // Core Architecture
        {
            question: "What is the Laravel service container and why does it matter?",
            answer: "The service container is Laravel's IoC (Inversion of Control) container that manages object creation and dependency injection. It resolves classes by their type hints, handles singletons, and lets you bind interfaces to implementations. This makes code testable (swap implementations in tests) and decoupled (classes don't instantiate their own dependencies)."
        },
        {
            question: "What is the difference between a Facade and a direct service container call?",
            answer: "A Facade is a static proxy that forwards calls to a concrete class resolved from the container (e.g., `DB::table()` calls the `db` binding). A direct call uses the container explicitly: `app('db')->table()`. Facades are syntactic sugar for testability — you can mock them in tests — while direct injection is preferred in classes for explicit dependencies."
        },
        {
            question: "What is the Laravel request lifecycle?",
            answer: "Request → `public/index.php` → `bootstrap/app.php` → Kernel (HTTP) → Middleware pipeline → Route resolution → Controller method → Response → Middleware (reverse) → Output. The Kernel boots service providers, resolves the route, runs the controller, and returns a Symfony Response object wrapped in a Laravel Response."
        },
        {
            question: "What are service providers and when do they run?",
            answer: "Service providers are the central configuration point for all services, bindings, and events in the app. They have two methods: `register()` (binds services to the container — no app instance available yet) and `boot()` (runs after all providers are registered — safe to hook events, routes, or observers). They run once per request on the first container resolution."
        },
        {
            question: "What is the difference between `register()` and `boot()` in a service provider?",
            answer: "`register()` should only bind services to the container — you cannot access other services or fire events here. `boot()` runs after ALL providers are registered, so you can safely use other services, register routes, hook into events, or define model observers. Putting logic in the wrong method is a common source of subtle bugs."
        },

        // Eloquent ORM
        {
            question: "What is Eager Loading and why is it critical for performance?",
            answer: "Eager Loading loads related records in a single query instead of triggering a query per parent (the N+1 problem). `User::with('posts')->get()` runs 2 queries total (users + all their posts) instead of 1 + N. Without it, accessing `$user->posts` in a loop fires a separate query for each user, which is catastrophic at scale."
        },
        {
            question: "What is the difference between `with()` and `load()` in Eloquent?",
            answer: "`with()` must be called *before* the query executes — it modifies the SQL to include the relationship via a JOIN or IN clause. `load()` is called *after* models are already retrieved — it fires a separate query to fetch the relationship and attaches it. Use `with()` for performance; `load()` for convenience when you forgot to eager load."
        },
        {
            question: "What are Eloquent scopes and how do local vs. global scopes differ?",
            answer: "Local scopes (e.g., `scopeActive()`) are optional query modifiers you call explicitly: `User::active()->get()`. Global scopes are applied automatically to every query on the model (e.g., soft deletes via `SoftDeletes` trait). Global scopes can be removed per-query with `withoutGlobalScope()` but are always present by default."
        },
        {
            question: "How does Eloquent's `SoftDeletes` work under the hood?",
            answer: "It adds a `deleted_at` timestamp column and a global scope that filters out rows where `deleted_at IS NOT NULL`. Deleting a model sets the timestamp instead of removing the row. You can query soft-deleted records with `withTrashed()` or force a real delete with `forceDelete()`. The global scope is what makes it transparent — you rarely think about it."
        },
        {
            question: "What is the difference between `find()`, `first()`, and `findOrFail()`?",
            answer: "`find($id)` looks up by primary key and returns the model or `null`. `first()` returns the first result of a query or `null`. `findOrFail($id)` looks up by primary key and throws a `ModelNotFoundException` (404) if not found — ideal for route model binding. `firstOrFail()` does the same for arbitrary query constraints."
        },
        {
            question: "What are Eloquent accessors and mutators?",
            answer: "Accessors transform an attribute when reading (e.g., `getFullNameAttribute()` or the new `Attribute::make(get: ...)` syntax). Mutators transform data before writing (e.g., hashing a password before save). They let you keep logic in the model layer instead of scattering it across controllers and views. Laravel 10+ uses the `Attribute::make()` fluent syntax."
        },
        {
            question: "What is the difference between `create()` and `forceCreate()`?",
            answer: "`create()` respects the `$fillable` (mass-assignment whitelist) or `$guarded` (blacklist) property — only listed fields are set. `forceCreate()` bypasses mass-assignment protection entirely, setting all provided attributes. Use `forceCreate()` sparingly (e.g., in seeders or migrations) because it defeats the security guard against mass-assignment vulnerabilities."
        },
        {
            question: "How does Eloquent handle database transactions?",
            answer: "Wrap multiple queries in `DB::transaction(function() { ... })` — if any exception is thrown, all queries in the closure are rolled back. You can also nest transactions (savepoints). For Eloquent specifically, `Model::transaction()` works identically. Transactions ensure atomicity: either all related writes succeed or none do."
        },

        // Routing & Controllers
        {
            question: "What is Route Model Binding and how does it work?",
            answer: "It automatically resolves a route parameter to an Eloquent model instance before the controller method runs. If the route is `/users/{user}`, Laravel queries `User::find($user)` and injects the model. If not found, it returns 404 automatically. You can customize the binding key with `getRouteKeyName()` or use implicit binding with type-hinted parameters."
        },
        {
            question: "What is the difference between route middleware and controller middleware?",
            answer: "Route middleware is applied in `routes/web.php` via `->middleware('auth')` and targets specific routes or groups. Controller middleware is defined in the controller's constructor via `$this->middleware('verified')` and applies to all methods in that controller. Both go through the same pipeline; the difference is scope and discoverability."
        },
        {
            question: "What are route groups and what can they encapsulate?",
            answer: "Route groups let you apply shared attributes to multiple routes: middleware, domain, prefix, name prefix, controller namespace, and where constraints. E.g., `Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function() { ... })`. They reduce repetition and make route configuration DRY."
        },
        {
            question: "What is the difference between `web.php` and `api.php` route files?",
            answer: "`web.php` routes go through the `web` middleware group (session, CSRF, cookie encryption) — intended for browser-based requests. `api.php` routes go through the `api` middleware group (stateless, no session/CSRF) — intended for JSON APIs and mobile clients. You can add `api.php` in Laravel 11+ by using the `withRouting(api: ...)` option in `bootstrap/app.php`."
        },
        {
            question: "What is a Form Request and why prefer it over inline validation?",
            answer: "A Form Request is a dedicated class that encapsulates authorization (`authorize()`), validation rules (`rules()`), and custom messages for a specific route. It keeps controllers clean, makes validation testable in isolation, and centralizes rules that might be reused. Call it by type-hinting the controller method parameter — Laravel resolves and validates it automatically."
        },

        // Middleware
        {
            question: "What is the middleware pipeline and how does it work?",
            answer: "Every request passes through an ordered list of middleware. Each middleware can: (1) short-circuit and return a response immediately, (2) modify the request before passing it down via `$next($request)`, or (3) modify the response on the way back. The pipeline is a stack — the last middleware wraps the controller, and responses flow back in reverse order."
        },
        {
            question: "What is the difference between global, route, and group middleware?",
            answer: "Global middleware (registered in `bootstrap/app.php` under `middleware`) runs on *every* request — e.g., `TrustProxies`, `PreventRequestForgery`. Group middleware (e.g., `web`, `api`) is applied to route groups. Route middleware is applied to individual routes via `->middleware()`. All three use the same pipeline mechanism; they differ in scope."
        },
        {
            question: "How does Laravel's CSRF protection work (Laravel 13)?",
            answer: "The `PreventRequestForgery` middleware (renamed from `VerifyCsrfToken` in L13) checks that state-changing requests (POST, PUT, PATCH, DELETE) include a valid CSRF token in the session. In L13 it also checks the `Sec-Fetch-Site` header for origin awareness, blocking cross-origin requests even if a token is present. Exempt routes are listed in `except()`."
        },

        // Validation
        {
            question: "What is the difference between `validate()` in a controller and a Form Request?",
            answer: "`$request->validate([...])` is inline validation — quick and simple, but rules live in the controller. A Form Request extracts rules into a dedicated class with `authorize()`, `rules()`, and `failedValidation()` methods. For complex forms or rules shared across endpoints, Form Requests are cleaner and more testable. Both use the same Validator underneath."
        },
        {
            question: "What are some useful Laravel validation rules beyond `required` and `email`?",
            answer: "Key ones: `unique:table,column` (DB uniqueness), `exists:table,column` (FK check), `in:a,b,c` (whitelist), `regex:/pattern/`, `min:5|max:255`, `date_format:Y-m-d`, `confirmed` (field matches field_confirmation), `prohibited` (must NOT be present), `bail` (stop on first failure), `sometimes` (only validate if present). Rules can be conditional via closures."
        },

        // Events & Observers
        {
            question: "What is the difference between Laravel Events and Model Observers?",
            answer: "Events are generic pub/sub: you dispatch a custom event (`OrderShipped`) and any number of listeners react. Observers are model-specific: a class with methods like `created()`, `updated()`, `deleted()` that fire automatically on Eloquent model events. Observers are syntactic sugar for model events — `Model::created(fn)` is the equivalent one-liner. Use Observers for model lifecycle, Events for cross-cutting business logic."
        },
        {
            question: "How do Laravel events work and when are they fired?",
            answer: "You define an event class (implementing `ShouldBeUnique` optionally), dispatch it with `event(new OrderShipped($order))`, and listeners registered in `EventServiceProvider` (or auto-discovered in `app/Listeners`) handle it. Listeners can run synchronously (same request) or be queued (implement `ShouldQueue`). Events decouple the action (placing an order) from the reactions (send email, update analytics)."
        },

        // Queues & Jobs
        {
            question: "What is the difference between synchronous, queued, and batched jobs?",
            answer: "Synchronous (`dispatchSync()`) runs the job immediately in the same process — no queue. Queued (`dispatch()`) pushes to a queue and a worker picks it up later — decouples response time from processing time. Batched (`Bus::batch([...])`) groups multiple jobs and fires a callback when all complete (or fail). Batches track progress and support cancellation."
        },
        {
            question: "What are the key configuration options for a queued Job?",
            answer: "In Laravel 13, these can be PHP attributes or class properties: `tries` (max attempts), `backoff` (delay between retries in seconds), `timeout` (max execution time), `maxExceptions` (L13: stop retrying after N unique exceptions), `onConnection`/`onQueue` (or centralized `Queue::route()` in L13), `retryUntil` (deadline), and `failOnTimeout`. These control resilience and resource usage."
        },
        {
            question: "What is the difference between `dispatch()` and `dispatchLater()`?",
            answer: "`dispatch()` pushes the job to the queue immediately for the next available worker. `dispatchLater(3600, ...)` or `dispatch(now()->addHour(), ...)` schedules the job to be available only after the delay — the queue worker won't pick it up before that time. Useful for delayed notifications, cleanup tasks, or rate-limiting processing."
        },
        {
            question: "How does Laravel handle failed jobs?",
            answer: "When a job exceeds its `tries` count or throws an unhandled exception, it's stored in the `failed_jobs` table with the serialized payload and exception. You can inspect with `php artisan queue:failed`, retry with `queue:retry`, or forget with `queue:forget`. You can also define a `failed(Throwable $e)` method on the job for custom failure handling (e.g., alerting)."
        },

        // Caching
        {
            question: "What is the difference between `Cache::remember()` and `Cache::get()` + `Cache::put()`?",
            answer: "`Cache::remember('key', 3600, fn() => ...)` is atomic: it checks the cache, and if missing, executes the closure, stores the result, and returns it — all in one call with no race condition. `get()` + `put()` is two separate operations where two concurrent requests could both miss and both compute. `remember()` is the preferred pattern for cache-aside."
        },
        {
            question: "What is `Cache::touch()` in Laravel 13 and when do you use it?",
            answer: "`Cache::touch($key, $seconds)` extends a cache entry's TTL without changing its value. Before L13, you had to `get()` the value and `put()` it back, which is wasteful for large values. Use it for sliding expiration: every time a user accesses their session data, extend the cache window by another N seconds without re-serializing the payload."
        },

        // Authentication & Authorization
        {
            question: "What is the difference between Laravel's `auth` and `verified` middleware?",
            answer: "`auth` ensures the user is logged in (has a valid session/token). `verified` adds an additional check that the user's email address has been confirmed (the `email_verified_at` column is not null). The `verified` middleware extends `auth` — it's used for routes that require a confirmed email, like sending sensitive data or enabling features."
        },
        {
            question: "What are Laravel Policies and how do they differ from Gates?",
            answer: "Policies are classes that encapsulate all authorization logic for a *model* (e.g., `PostPolicy` with `update()`, `delete()` methods). Gates are ad-hoc authorization rules registered in `AuthServiceProvider` for actions that don't map to a single model (e.g., `Gate::define('admin', ...)`). Policies are auto-discovered by convention; Gates are manual. Both are checked via `$user->can('update', $post)` or `@can` in Blade."
        },
        {
            question: "What is Laravel Passkey authentication (Laravel 13)?",
            answer: "Native WebAuthn/Passkey support built into Fortify and the official starter kits. Users authenticate with biometrics (Touch ID, Face ID) or hardware security keys. The private key never leaves the user's device, making phishing and credential stuffing impossible against auth endpoints. It's a first-party feature in L13 — no third-party packages needed."
        },

        // Blade & Views
        {
            question: "What is the difference between `@extends`, `@include`, and `@yield` in Blade?",
            answer: "`@extends('layout')` sets a parent template; `@yield('content')` in the parent defines a placeholder; `@section('content')` in the child fills it. `@include('partial')` injects a sub-view inline at that exact point — no placeholder needed. Use `@extends`/`@section` for page-level layout; `@include` for reusable components (navbars, forms, cards)."
        },
        {
            question: "What are Blade components and how do they differ from partials?",
            answer: "Blade components (`<x-alert type=\"danger\">`) are class-based or anonymous (single-file) reusable UI units with props, slots, and attributes. Partials (`@include('alert')`) are just view includes with no structure. Components support prop validation, `@props()`, named/anonymous slots, and attribute passthrough — making them the modern approach for reusable UI. Partials are fine for simple includes."
        },

        // HTTP Client & External APIs
        {
            question: "What is the Laravel HTTP Client and what are its key features?",
            answer: "A fluent wrapper around Guzzle for making outbound HTTP requests. Key features: `Http::get/post/json()`, middleware (retries, timeouts, logging), connection pooling, `Http::pool()` for concurrent requests (L13 defaults to concurrency of 2), response macros, and fake support for testing (`Http::fake()`). It replaces manual Guzzle usage with a cleaner, testable API."
        },

        // Task Scheduling
        {
            question: "How does Laravel's task scheduler work?",
            answer: "You define scheduled commands in `routes/console.php` using the `Schedule` facade: `Schedule::command('inspire')->hourly()`. A single cron job (`* * * * * php artisan schedule:run`) fires every minute, and the scheduler checks which tasks are due. Tasks can be chained, overlapped-protected (`withoutOverlapping()`), and run in specific environments or timezones."
        },

        // Migrations & Seeders
        {
            question: "What is the difference between a migration and a seeder?",
            answer: "Migrations define *schema* — creating, altering, and dropping tables/columns. They are versioned, reversible, and run in order. Seeders populate *data* — inserting rows into tables. You can have multiple seeders (UserSeeder, PostSeeder) run in a defined order via `DatabaseSeeder`. Migrations are for structure; seeders are for content."
        },
        {
            question: "What is the purpose of `php artisan migrate:fresh --seed`?",
            answer: "It drops all tables, re-runs all migrations from scratch (rebuilding the schema), and then runs all seeders. It's the standard way to reset a development database to a clean, known state. Never use it in production — it destroys all data. In production, you run `php artisan migrate` to apply only new migrations."
        },

        // Testing
        {
            question: "What is the difference between `assertSee()` and `assertDontSee()` in Laravel feature tests?",
            answer: "`$response->assertSee('Welcome')` asserts the string appears in the response HTML. `assertDontSee('Error')` asserts it does NOT appear. Both have an `escape` parameter (default `true`) — set to `false` to search for raw HTML. They work on the rendered response, making them ideal for asserting UI content in feature tests without a browser."
        },
        {
            question: "What is `Http::fake()` and why is it essential for testing?",
            answer: "`Http::fake()` intercepts all outbound HTTP requests made via the Laravel HTTP Client during a test, returning canned responses instead of hitting real APIs. You define sequences: `Http::fake(['api.github.com/*' => Http::response(200)])`. Without it, tests would be slow, flaky, and dependent on external service availability. It's the standard way to test integrations in isolation."
        },

        // Laravel 13 Specific
        {
            question: "What is the Laravel AI SDK and what does it provide?",
            answer: "A first-party, provider-agnostic SDK (stable since L13) for integrating AI capabilities: text generation, tool-calling agents, embeddings, image generation, and audio synthesis. Supports OpenAI, Anthropic Claude, and Google Gemini through a single unified API. Switching providers requires only a config change. Includes streaming, structured output, and a testing fake (`Ai::fake()`)."
        },
        {
            question: "What are PHP Attributes in Laravel 13 and where are they used?",
            answer: "PHP 8 `#[Attribute]` syntax as an optional alternative to class properties for configuring framework components. Used in 15+ locations: `#[Middleware]`, `#[Authorize]` on controllers; `#[Tries]`, `#[Backoff]`, `#[Timeout]`, `#[FailOnTimeout]` on jobs; and on models, commands, listeners, mailables. Purely additive — old property syntax still works."
        },
        {
            question: "What is `Queue::route()` in Laravel 13?",
            answer: "A centralized way to define which queue and connection each job class uses, declared once in a service provider instead of scattered across `dispatch()` calls or per-job `onQueue()`/`onConnection()` properties. E.g., `Queue::route(EmailJob::class, 'mail', 'redis')`. Reduces duplication and makes queue topology easier to audit and change."
        },
        {
            question: "What is the Reverb database driver and why does it matter for scaling?",
            answer: "Laravel Reverb (the real-time WebSocket server) traditionally required Redis for its state layer (presence channels, connection tracking). The database driver (L13) lets you use PostgreSQL/MySQL instead, eliminating a Redis dependency. This simplifies infrastructure for smaller deployments and enables horizontal scaling of Reverb instances without a shared Redis cluster."
        },
        {
            question: "What is `whereVectorSimilarTo()` in Laravel 13?",
            answer: "A native query builder method for semantic/vector search using PostgreSQL's `pgvector` extension. `Post::whereVectorSimilarTo('embedding', $queryVector)->get()` returns rows ranked by cosine similarity to the given vector. Enables AI-powered search (e.g., 'find posts similar to this text') without a separate search engine like Elasticsearch or Meilisearch."
        },
    ];

    localStorage.setItem("flash-cards", JSON.stringify(quizArray));
    if (typeof startTest === "function") {
        startTest();
    }
}   