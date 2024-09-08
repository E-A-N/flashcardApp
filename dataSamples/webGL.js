let webglQuestions = [
    // General WebGL
    {question: "What is WebGL?", answer: "WebGL (Web Graphics Library) is a JavaScript API used to render 2D and 3D graphics in a web browser without the need for plugins. It provides hardware-accelerated graphics using the GPU, enabling rich visual content and interactive experiences directly within web applications."},

    {question: "How does WebGL relate to OpenGL?", answer: "WebGL is a JavaScript binding to OpenGL ES (Embedded Systems), which is a subset of OpenGL designed for embedded systems like mobile devices. While OpenGL is used for high-performance graphics on desktop systems, WebGL adapts these concepts to be used within web browsers."},

    // Language Syntax and Data Types
    {question: "What data types are supported in GLSL (OpenGL Shading Language)?", answer: "GLSL supports various data types, including: scalar types (e.g., `float`, `int`), vector types (e.g., `vec2`, `vec3`, `vec4`), matrix types (e.g., `mat2`, `mat3`, `mat4`), and sampler types for textures (e.g., `sampler2D`). Additionally, GLSL provides Boolean (`bool`) and unsigned integer (`uint`) types."},

    {question: "How do you declare and use a uniform variable in GLSL?", answer: "To declare a uniform variable in GLSL, use the `uniform` keyword followed by the type and variable name, e.g., `uniform mat4 uModelMatrix;`. To use this variable, you need to set its value from JavaScript using the `gl.uniform*` functions after locating its location with `gl.getUniformLocation()`."},

    {question: "What is the difference between `varying` and `in`/`out` in GLSL?", answer: "`varying` is used in GLSL versions prior to 1.30 to pass data from the vertex shader to the fragment shader. In GLSL 1.30 and later, `in` and `out` are used instead, where `in` is used for input variables in shaders, and `out` is used for output variables. The `in`/`out` model provides more explicit control over the data flow between shaders."},

    {question: "How do you use `attribute` variables in GLSL?", answer: "In GLSL, `attribute` variables are used to pass vertex data (like positions or colors) from JavaScript to the vertex shader. You declare them with the `attribute` keyword, e.g., `attribute vec3 aPosition;`. In JavaScript, you link these attributes to buffer data using `gl.vertexAttribPointer()` and enable them with `gl.enableVertexAttribArray()`."},

    {question: "What is the purpose of `precision` qualifiers in GLSL?", answer: "`precision` qualifiers in GLSL specify the precision of floating-point calculations for different shader stages. They can be `highp`, `mediump`, or `lowp`, determining the trade-off between precision and performance. For example, `precision highp float;` ensures high precision for floating-point variables, which is crucial for accuracy in computations."},

    // Common Math Techniques
    {question: "How do you perform a matrix multiplication in GLSL?", answer: "In GLSL, matrix multiplication can be done using the `*` operator between matrices or vectors. For example, `vec4 result = modelMatrix * vec4(position, 1.0);` multiplies a 4x4 matrix `modelMatrix` with a 4D vector `vec4(position, 1.0)`."},

    {question: "What are the common vector operations in GLSL?", answer: "Common vector operations in GLSL include: 1) Addition (`+`), 2) Subtraction (`-`), 3) Scalar multiplication (`*`), 4) Dot product (`dot(vecA, vecB)`), 5) Cross product (`cross(vecA, vecB)`), 6) Normalization (`normalize(vec)`), and 7) Length (`length(vec)`). These operations are essential for vector math in graphics programming."},

    {question: "How do you calculate the normal of a surface in WebGL?", answer: "To calculate the normal of a surface in WebGL, you need to compute the cross product of two vectors lying on the surface. For example, given two vectors `v1` and `v2` that define the surface, the normal can be computed with `vec3 normal = normalize(cross(v1, v2));` to obtain a unit vector perpendicular to the surface."},

    {question: "How is trigonometry used in WebGL?", answer: "Trigonometry is used in WebGL for various purposes such as rotation, scaling, and positioning of objects. Functions like `sin()`, `cos()`, and `tan()` are used to compute angles and transformations. For example, to rotate an object around the Y-axis, you can use a rotation matrix involving `cos()` and `sin()` functions to calculate the new vertex positions."},

    {question: "What is the purpose of the `gl.uniformMatrix4fv()` function?", answer: "`gl.uniformMatrix4fv()` is used to pass a 4x4 matrix from JavaScript to a uniform variable in a WebGL shader program. This function takes the location of the uniform variable, a boolean indicating whether the matrix should be transposed, and an array of values representing the matrix."},

    {question: "How do you apply transformations such as translation, rotation, and scaling in WebGL?", answer: "Transformations are applied using 4x4 matrices. Translation, rotation, and scaling matrices are created and multiplied together to form a final transformation matrix. For example: 1) Translation: `mat4.translate(matrix, vec3(translateX, translateY, translateZ));` 2) Rotation: `mat4.rotate(matrix, angle, vec3(axisX, axisY, axisZ));` 3) Scaling: `mat4.scale(matrix, vec3(scaleX, scaleY, scaleZ));` Combine these matrices to transform vertices accordingly."},

    // Graphics Programming Patterns
    {question: "What is the purpose of using a render loop in WebGL?", answer: "A render loop is used to continuously update and render graphics in WebGL. It is typically implemented using `requestAnimationFrame()` to ensure smooth and synchronized rendering with the display refresh rate. The render loop allows for dynamic updates to the scene, animations, and interactions in real-time."},

    {question: "How do you implement a simple game loop in WebGL?", answer: "A simple game loop in WebGL involves setting up a function that performs rendering and updates, and repeatedly calling this function using `requestAnimationFrame()`. Example: `function renderLoop() { update(); render(); requestAnimationFrame(renderLoop); } renderLoop();` where `update()` handles game logic and `render()` handles drawing to the canvas."},

    {question: "What is a scene graph, and how is it used in WebGL?", answer: "A scene graph is a hierarchical data structure used to manage and organize the various objects in a 3D scene. It helps in efficiently rendering and updating objects by grouping them into nodes, where each node can represent an object or a group of objects. Scene graphs facilitate transformations, visibility culling, and scene management in complex WebGL applications."},

    {question: "How do you implement basic frustum culling in WebGL?", answer: "Frustum culling involves determining which objects are within the camera's view frustum and thus should be rendered. To implement frustum culling, you compute the camera's view frustum planes and test each object's bounding volume (like a bounding box or sphere) against these planes to check if it is inside the frustum before rendering."},

    {question: "What are framebuffer objects (FBOs) and how are they used in WebGL?", answer: "Framebuffer Objects (FBOs) are used to render to off-screen textures instead of directly to the canvas. They allow for more complex rendering techniques such as render-to-texture, post-processing effects, and multiple render targets. FBOs are created using `gl.createFramebuffer()`, and attachments (color, depth, and stencil) are set up with `gl.framebufferTexture2D()` or `gl.framebufferRenderbuffer()`."},

    {question: "How do you implement basic lighting in WebGL?", answer: "Basic lighting in WebGL can be implemented using shaders to simulate light effects. Common types of lighting include ambient, diffuse, and specular lighting. In a fragment shader, you compute light contributions based on light position, view direction, surface normals, and material properties. For example, use Lambertian reflection for diffuse lighting and Phong reflection for specular highlights."},

    {question: "What is a vertex array object (VAO), and how does it improve WebGL performance?", answer: "A Vertex Array Object (VAO) is used to encapsulate the state related to vertex attributes and their buffers. By storing vertex attribute configuration in a VAO, you can reduce the overhead of setting up vertex attributes each frame. VAOs improve performance by reducing the number of state changes and enabling efficient rendering with multiple draw calls."},

    {question: "How do you handle different screen resolutions and aspect ratios in WebGL?", answer: "To handle different screen resolutions and aspect ratios, you need to adjust the viewport and projection matrices. Use `gl.viewport()` to set the canvas drawing area based on the canvas size. Adjust the projection matrix (e.g., using `mat4.perspective()` or `mat4.ortho()`) to ensure that your scene appears correctly across different resolutions and aspect ratios."},

    {question: "What is the role of the depth buffer in WebGL, and how do you enable it?", answer: "The depth buffer, or z-buffer, is used to manage depth information for pixels to handle occlusions and ensure that closer objects obscure farther ones. To enable the depth buffer, you use `gl.enable(gl.DEPTH_TEST)` and set the depth function with `gl.depthFunc()`, such as `gl.LESS` to ensure that only pixels closer to the camera are rendered."},

    {question: "How can you implement post-processing effects like bloom or blur in WebGL?", answer: "Post-processing effects in WebGL are implemented by rendering the scene to a texture using a framebuffer object (FBO) and then applying shader effects to this texture in a subsequent pass. For example, to implement a bloom effect, you would render the scene to a texture, apply a blur filter using a shader, and then combine the blurred texture with the original scene to achieve the bloom effect."}
];

localStorage.setItem("flash-cards", JSON.stringify(webglQuestions));
