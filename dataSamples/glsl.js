let glslRoutine = () => {
    let glslQuestions = [
        {question: "What is GLSL and what is it used for?", answer: "GLSL (OpenGL Shading Language) is a high-level shading language used for programming shaders in OpenGL. It allows developers to write code that executes on the GPU to control the rendering pipeline, including vertex and fragment shaders for processing vertices and pixels respectively."},

        {question: "What are the primary types of shaders in GLSL?", answer: "The primary types of shaders in GLSL are vertex shaders, fragment shaders, and geometry shaders. Vertex shaders process each vertex, fragment shaders handle pixel color calculations, and geometry shaders can generate additional geometry from existing vertices."},

        {question: "What is the purpose of a vertex shader in GLSL?", answer: "The vertex shader processes each vertex of a 3D model, transforming it from model space to screen space by applying transformations such as translation, rotation, and scaling. It also passes data to the fragment shader via varying variables."},

        {question: "How do you declare and use a uniform variable in GLSL?", answer: "Uniform variables in GLSL are used to pass data from the application to the shader. They are declared using the `uniform` keyword and are constant for all processed vertices or fragments during a single draw call. For example: `uniform mat4 modelViewProjectionMatrix;`."},

        {question: "What are varying variables in GLSL, and how are they used?", answer: "Varying variables are used to pass data from the vertex shader to the fragment shader. They are declared with the `varying` keyword in the vertex shader and accessed in the fragment shader. For example: `varying vec4 vertexColor;` in the vertex shader and `gl_FragColor = vertexColor;` in the fragment shader."},

        {question: "What is the purpose of the `gl_Position` built-in variable in GLSL?", answer: "`gl_Position` is a built-in variable in the vertex shader that determines the final position of a vertex in clip space. The value assigned to `gl_Position` affects where the vertex will be positioned on the screen after the vertex shader processing and subsequent transformations."},

        {question: "How do you perform a simple color interpolation in a fragment shader?", answer: "Color interpolation in a fragment shader is typically done using varying variables that carry color values from the vertex shader. For example, if you pass a color from the vertex shader to the fragment shader using `varying vec4 vertexColor;`, you can simply assign `gl_FragColor = vertexColor;` in the fragment shader to achieve interpolation."},

        {question: "What are built-in functions in GLSL, and can you provide an example?", answer: "Built-in functions in GLSL are predefined functions provided by the language to perform common operations. Examples include mathematical functions like `sin()`, `cos()`, and `pow()`, as well as functions for vector operations like `normalize()`, `dot()`, and `cross()`."},

        {question: "How do you perform matrix multiplication in GLSL?", answer: "Matrix multiplication in GLSL is performed using the `*` operator. For example, if you have a `mat4` matrix and a `vec4` vector, you can multiply them as `vec4 result = matrix * vector;` to apply the transformation defined by the matrix to the vector."},

        {question: "What is the difference between `vec3` and `vec4` in GLSL?", answer: "In GLSL, `vec3` represents a 3-component vector, typically used for colors or 3D positions, while `vec4` represents a 4-component vector, which can be used for homogeneous coordinates, colors with alpha, or other data that require an additional component."},

        {question: "How do you create a texture sampler in GLSL?", answer: "A texture sampler in GLSL is declared using the `sampler2D`, `sampler3D`, or `samplerCube` types, depending on the type of texture. For example, `uniform sampler2D myTexture;` is used to declare a 2D texture sampler, which can then be used in the fragment shader to sample texture data."},

        {question: "What is the purpose of the `texture2D` function in GLSL?", answer: "`texture2D` is a built-in function used to sample a texture in the fragment shader. It takes a `sampler2D` and a `vec2` texture coordinate as arguments and returns the color value from the texture at that coordinate. For example: `vec4 color = texture2D(myTexture, uvCoord);`."},

        {question: "How do you handle lighting calculations in a fragment shader?", answer: "Lighting calculations in a fragment shader typically involve computing the dot product between surface normals and light direction vectors, and then using this to calculate diffuse and specular components. For example, you can calculate the diffuse term using `max(dot(normal, lightDir), 0.0) * lightColor` and the specular term using `pow(max(dot(reflectDir, viewDir), 0.0), shininess) * specularColor`."},

        {question: "What is a geometry shader, and how does it differ from a vertex shader?", answer: "A geometry shader processes entire primitives (points, lines, triangles) rather than individual vertices. It can generate new vertices and primitives, allowing for advanced effects like particle systems or procedural geometry. Unlike vertex shaders, which only transform vertices, geometry shaders can add or modify geometry at runtime."},

        {question: "How do you use the `gl_FragColor` built-in variable in GLSL?", answer: "`gl_FragColor` is a built-in variable in the fragment shader used to set the color of a pixel. You assign a `vec4` value to `gl_FragColor` to determine the final color output. For example: `gl_FragColor = vec4(color, 1.0);` sets the pixel color with an alpha value of 1.0."},

        {question: "What is the purpose of the `discard` statement in a fragment shader?", answer: "The `discard` statement in a fragment shader is used to discard the current fragment, effectively making it transparent or invisible. It is typically used in operations like alpha testing or when you want to avoid drawing certain pixels based on specific conditions."},

        {question: "How do you perform a perspective projection in GLSL?", answer: "Perspective projection in GLSL is usually done using a projection matrix that transforms 3D coordinates into 2D clip space. You typically pass a perspective projection matrix from the application to the vertex shader via a uniform variable and use it to transform vertex positions. For example, `gl_Position = projectionMatrix * modelViewMatrix * vertexPosition;`."},

        {question: "What are some common texture filtering techniques used in GLSL?", answer: "Common texture filtering techniques in GLSL include nearest-neighbor filtering, which selects the nearest texel, and bilinear filtering, which interpolates between the four nearest texels. These techniques can be set using texture parameters like `GL_NEAREST` or `GL_LINEAR` with `glTexParameteri` in OpenGL."},

        {question: "How do you implement shadow mapping in GLSL?", answer: "Shadow mapping involves creating a depth map from the light's perspective and using it in the fragment shader to determine if a fragment is in shadow. You render the scene from the light's viewpoint to create a depth texture, then use this texture in the fragment shader to compare the fragment's depth to the stored depth value to determine shadow presence."},

        {question: "What is the `#version` directive in GLSL, and how is it used?", answer: "The `#version` directive specifies the GLSL version to be used in the shader. It should be the first line in a GLSL file and defines the version compatibility for the shader code. For example, `#version 330` specifies that the shader should use GLSL version 3.30."},

        {question: "How do you use GLSL to create a gradient effect?", answer: "To create a gradient effect in GLSL, you can interpolate between colors based on a variable like the fragment's position or texture coordinate. For example, you can use a mix function: `gl_FragColor = mix(color1, color2, gradientFactor);` where `gradientFactor` is computed based on the position or other criteria."},

        {question: "What is a frame buffer object (FBO), and how is it used in GLSL?", answer: "A frame buffer object (FBO) is an OpenGL object that allows rendering to an off-screen buffer. FBOs are used for techniques like render-to-texture or post-processing effects. You create an FBO, attach textures or renderbuffers to it, and render to it just like you would to the default frame buffer."},

        {question: "How do you handle depth testing in GLSL?", answer: "Depth testing is handled in OpenGL (and GLSL) using a depth buffer, which stores the depth information of pixels. You enable depth testing with `glEnable(GL_DEPTH_TEST);` and set the depth function with `glDepthFunc(GL_LESS);` to control how depth values are compared during rendering. GLSL does not directly handle depth testing but relies on OpenGL state settings."},

        {question: "What is the purpose of the `smoothstep` function in GLSL?", answer: "The `smoothstep` function in GLSL performs smooth Hermite interpolation between two values based on an input parameter. It is often used to create smooth transitions or gradients. For example: `smoothstep(edge0, edge1, x)` returns a smooth interpolation between 0 and 1 as `x` moves from `edge0` to `edge1`."},

        {question: "How do you implement a basic texture lookup in GLSL?", answer: "To perform a basic texture lookup in GLSL, use the `texture2D` function with a texture sampler and texture coordinates. For example: `vec4 color = texture2D(myTexture, uvCoords);` retrieves the color from `myTexture` at the given `uvCoords`."},

        {question: "What is the purpose of the `glUniform` function in OpenGL?", answer: "The `glUniform` function is used to set the value of a uniform variable in a shader program from the application. It is called with the location of the uniform variable, and the value to set. For example: `glUniformMatrix4fv(location, 1, GL_FALSE, matrix);` sets a `mat4` uniform in the shader program."},

        {question: "How do you implement normal mapping in GLSL?", answer: "Normal mapping is implemented by using a normal map texture to modify the surface normals of a model in the fragment shader. First, sample the normal map with `texture2D` to get the normal vector, and then use it for lighting calculations. For example: `vec3 normal = normalize(texture2D(normalMap, uv).xyz * 2.0 - 1.0);`."},

        {question: "What is the purpose of the `gl_FragCoord` built-in variable in GLSL?", answer: "`gl_FragCoord` is a built-in variable in the fragment shader that contains the coordinates of the current fragment. It can be used for operations like screen-space effects or for determining the pixel position within the render target."},

        {question: "How do you perform blurring using a GLSL shader?", answer: "Blurring in GLSL can be performed using a convolution kernel applied to the texture data. You sample the texture at multiple offsets around the current fragment and average the results. For example: `vec4 color = (texture2D(myTexture, uv + vec2(-1.0, -1.0)) + ... + texture2D(myTexture, uv + vec2(1.0, 1.0))) / 9.0;`."},

        {question: "What are the differences between GLSL version 1.20 and 3.30?", answer: "GLSL version 3.30 introduced significant improvements over 1.20, including new features like integer types, more advanced texture lookups, and improved support for modern OpenGL functionality. Version 3.30 also added support for more advanced GLSL constructs and improved the consistency of language features."},

        {question: "How do you perform alpha blending in GLSL?", answer: "Alpha blending is performed by combining the color of the fragment with the color already in the frame buffer based on the alpha value. In the fragment shader, you can set `gl_FragColor` to include alpha values: `gl_FragColor = vec4(color.rgb, alpha);`. You also need to enable blending in OpenGL with `glEnable(GL_BLEND);` and set the blend function with `glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);`."},

        {question: "What is the `clip()` function in GLSL, and how is it used?", answer: "The `clip()` function in GLSL discards a fragment if a specified condition is not met. For example: `clip(value - threshold);` will discard fragments where `value` is less than `threshold`. This is useful for creating effects like masking or implementing custom clipping planes."},

        {question: "How do you use `#define` to create macros in GLSL?", answer: "The `#define` directive in GLSL is used to create macros that can be used throughout the shader code. For example: `#define PI 3.14159265359` defines a constant `PI` that can be used in expressions like `float angle = PI * 0.5;`."},

        {question: "What are some common techniques for optimizing GLSL shaders?", answer: "Common techniques for optimizing GLSL shaders include minimizing the number of texture lookups, using simpler mathematical operations, avoiding unnecessary calculations, leveraging built-in functions and hardware capabilities, and optimizing memory usage by reducing the number of varying variables and texture sizes."},

        {question: "How do you implement procedural texture generation in GLSL?", answer: "Procedural texture generation in GLSL involves creating textures on-the-fly using mathematical functions. Instead of sampling from an image, you compute texture values directly in the fragment shader. For example, you can use noise functions or mathematical patterns to generate textures dynamically."},

        {question: "What is a `struct` in GLSL, and how is it used?", answer: "A `struct` in GLSL is a user-defined data type that groups together related variables. For example: `struct Material { vec3 color; float shininess; };` defines a `Material` struct that can be used to pass complex data between shaders. Structs help organize and manage related data more effectively."}
    ];

    localStorage.setItem("flash-cards", JSON.stringify(glslQuestions));
    location.reload();
}