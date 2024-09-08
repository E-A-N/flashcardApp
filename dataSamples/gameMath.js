globalRoutines.gameMath = () => {
    let gameMathQuestions = [
        {question: "What is the difference between Cartesian and polar coordinates?", answer: "Cartesian coordinates use a grid system with x and y (or z) axes to define positions in a plane or space. Polar coordinates use a radius and angle to define positions relative to a central point. In games, Cartesian coordinates are often used for grid-based movements, while polar coordinates are used for radial and angular positioning."},

        {question: "How do you convert between Cartesian and polar coordinates?", answer: "To convert from Cartesian to polar coordinates, use the formulas: radius = sqrt(x^2 + y^2) and angle = atan2(y, x). To convert from polar to Cartesian coordinates, use: x = radius * cos(angle) and y = radius * sin(angle). These conversions are essential for handling movement and positioning in different coordinate systems."},

        {question: "What is vector normalization, and why is it important?", answer: "Vector normalization scales a vector to have a length of 1, while maintaining its direction. It is important for ensuring consistent behavior when dealing with directions, such as for movement or calculating angles. Normalizing a vector is done by dividing it by its length: `vec = vec / length(vec)`."},

        {question: "How do you calculate the distance between two points in 2D space?", answer: "The distance between two points (x1, y1) and (x2, y2) in 2D space is calculated using the Euclidean distance formula: `distance = sqrt((x2 - x1)^2 + (y2 - y1)^2)`. This is used for determining how far apart objects are in a game world."},

        {question: "What is the dot product of two vectors, and what does it represent?", answer: "The dot product of two vectors `a` and `b` is calculated as `a · b = ax * bx + ay * by`. It represents the cosine of the angle between the vectors multiplied by their magnitudes. The dot product is useful for determining angles between vectors and projecting one vector onto another."},

        {question: "How do you calculate the angle between two vectors?", answer: "To calculate the angle between two vectors `a` and `b`, use the dot product formula: `cos(angle) = (a · b) / (length(a) * length(b))`. Then, compute the angle with `angle = acos(cos(angle))`. This angle is crucial for determining how aligned or perpendicular two vectors are."},

        {question: "What is the cross product of two vectors, and how is it used?", answer: "The cross product of two vectors `a` and `b` results in a vector perpendicular to both `a` and `b`. It is calculated as `a × b = (ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx)`. The cross product is used in 3D games for calculating surface normals and determining the orientation of objects."},

        {question: "How do you interpolate between two points using linear interpolation (LERP)?", answer: "Linear interpolation (LERP) between two points `A` and `B` is done using the formula: `Lerp(A, B, t) = A + t * (B - A)`, where `t` is a parameter between 0 and 1. LERP is used to smoothly transition between values, such as animating positions or colors."},

        {question: "What is a bounding box, and how is it used for collision detection?", answer: "A bounding box is a simple geometric shape (often a rectangle or box) used to enclose an object for collision detection. In 2D games, it's a rectangle around a sprite, and in 3D games, it's a box around a model. Bounding boxes simplify collision detection by approximating complex shapes with simpler ones."},

        {question: "How do you check for collision between two axis-aligned bounding boxes (AABBs)?", answer: "To check for collision between two axis-aligned bounding boxes, compare their min and max coordinates. If the intervals on all axes overlap, the boxes collide. For two boxes with min and max coordinates `A_min`/`A_max` and `B_min`/`B_max`, check if: `A_max.x >= B_min.x` and `A_min.x <= B_max.x`, etc., for each axis."},

        {question: "What is the purpose of the Radians to Degrees conversion?", answer: "Radians and degrees are two units for measuring angles. Conversion between them is necessary because some mathematical functions and systems use radians (e.g., trigonometric functions in most programming languages), while others use degrees. The conversion formulas are: Degrees = Radians × (180/π) and Radians = Degrees × (π/180)."},

        {question: "How do you calculate the quadratic formula for a projectile's trajectory?", answer: "The quadratic formula for a projectile's trajectory is used to find the object's position over time. The position is determined by the equation `y = y0 + v0 * t - 0.5 * g * t^2`, where `y0` is the initial position, `v0` is the initial velocity, `g` is the gravitational constant, and `t` is time. This formula helps simulate projectile motion under gravity."},

        {question: "What is the purpose of using Bézier curves in game development?", answer: "Bézier curves are used to create smooth and flexible curves defined by control points. They are commonly used for animations, pathfinding, and character movement. The curve's shape is controlled by adjusting the positions of the control points, allowing for complex and visually appealing paths and transitions."},

        {question: "How do you perform matrix transformations for object rotation?", answer: "Object rotation in games is performed using rotation matrices. In 2D, a rotation matrix for an angle `θ` is: `mat2 = [cos(θ), -sin(θ); sin(θ), cos(θ)]`. In 3D, rotation matrices are more complex, involving axis-angle representations. Rotation matrices are multiplied with vertex coordinates to apply the rotation transformation."},

        {question: "What is the concept of quaternions, and how are they used for rotations?", answer: "Quaternions are a mathematical construct used to represent rotations in 3D space. They avoid some issues associated with Euler angles, such as gimbal lock. A quaternion consists of four components (w, x, y, z) and is used to rotate vectors or objects by performing quaternion multiplication and interpolation."},

        {question: "How do you calculate the normal vector for a plane given three points?", answer: "To calculate the normal vector for a plane given three points `P1`, `P2`, and `P3`, compute two vectors on the plane, e.g., `v1 = P2 - P1` and `v2 = P3 - P1`. The normal vector is the cross product of these vectors: `normal = cross(v1, v2)`. This vector is perpendicular to the plane defined by the three points."},

        {question: "What is the significance of the field of view (FOV) in perspective projection?", answer: "The field of view (FOV) determines how much of the scene is visible in the perspective projection. A larger FOV shows more of the scene, while a smaller FOV zooms in. FOV is typically specified in degrees and is used to create the perspective projection matrix, influencing how objects appear larger or smaller based on their distance from the camera."},

        {question: "How do you calculate the intersection point of two lines in 2D space?", answer: "To calculate the intersection point of two lines defined by equations `y = m1 * x + b1` and `y = m2 * x + b2`, solve for `x` using: `x = (b2 - b1) / (m1 - m2)`. Substitute this `x` value back into one of the line equations to get the `y` value. This gives the intersection point `(x, y)`."},

        {question: "What is a transformation matrix, and how is it used in 3D graphics?", answer: "A transformation matrix is used to perform operations such as translation, rotation, and scaling on 3D objects. It is a 4x4 matrix that transforms the coordinates of vertices in a 3D space. By multiplying vertex positions by transformation matrices, you can apply various transformations to objects in the scene."},

        {question: "How do you apply scaling to an object in 3D graphics?", answer: "Scaling in 3D graphics is applied using a scaling matrix. A scaling matrix for factors `sx`, `sy`, and `sz` is: `mat4 = [sx, 0, 0, 0; 0, sy, 0, 0; 0, 0, sz, 0; 0, 0, 0, 1]`. Multiply this matrix with the object's vertex positions to scale the object uniformly or non-uniformly along the x, y, and z axes."},

        {question: "What is the difference between world space and local space in 3D graphics?", answer: "World space is the global coordinate system where all objects are positioned and oriented relative to a common origin. Local space refers to the coordinate system relative to an individual object's origin. Transformations are first applied in local space before being transformed to world space for rendering."},

        {question: "How do you calculate the bounding sphere of a 3D object?", answer: "To calculate the bounding sphere of a 3D object, determine the center point of the object and the maximum distance from this center to any vertex. The radius of the bounding sphere is this maximum distance. Bounding spheres are used for simplified collision detection and frustum culling."},

        {question: "What is a 2D matrix transformation, and how is it applied?", answer: "A 2D matrix transformation involves using a 3x3 matrix to perform operations such as translation, rotation, and scaling on 2D vectors. For example, a translation matrix might be `mat3 = [1, 0, tx; 0, 1, ty; 0, 0, 1]`, where `tx` and `ty` are translation amounts. Apply the matrix by multiplying it with the 2D vector to transform it."},

        {question: "How do you compute the reflection vector in a 3D graphics context?", answer: "To compute the reflection vector `r` for a vector `v` hitting a surface with normal `n`, use the formula: `r = v - 2 * dot(v, n) * n`. This calculation is essential for simulating reflective surfaces and determining how light reflects off surfaces in 3D graphics."},

        {question: "What is the purpose of the `viewport` in graphics rendering?", answer: "The `viewport` defines the portion of the canvas where the final rendered image is displayed. It is set using `gl.viewport(x, y, width, height)` in WebGL, where `(x, y)` specifies the lower-left corner, and `width` and `height` define the dimensions. It is crucial for adjusting how the rendered scene fits within the canvas."},

        {question: "How do you compute the center of mass for a complex 3D object?", answer: "To compute the center of mass (centroid) for a complex 3D object, average the positions of all its vertices weighted by their respective masses or volumes. If the object is uniformly distributed, simply average the vertex positions: `centerOfMass = (sum of all vertex positions) / (number of vertices)`."},

        {question: "What is the significance of aspect ratio in graphics rendering?", answer: "The aspect ratio is the ratio of the width to the height of the viewport or canvas. It affects how the scene is projected and displayed. Maintaining the correct aspect ratio prevents distortion and ensures that objects appear correctly without stretching or squishing. It is typically set in the projection matrix."},

        {question: "How do you handle different resolutions in game graphics?", answer: "To handle different resolutions, use techniques such as adaptive scaling and dynamic resolution adjustment. Ensure that the game's UI and assets scale appropriately with the resolution, and adjust the viewport and projection matrices to match the current resolution to maintain consistent gameplay experience across devices."},

        {question: "What is the role of the `near` and `far` planes in perspective projection?", answer: "The `near` and `far` planes define the range of distances from the camera where objects are visible in a perspective projection. Objects closer than the `near` plane or farther than the `far` plane are clipped out. These planes help manage depth precision and ensure that objects within the visible range are rendered correctly."},

        {question: "How do you calculate the area of a triangle given its vertices in 2D space?", answer: "The area of a triangle with vertices `(x1, y1)`, `(x2, y2)`, and `(x3, y3)` can be calculated using the formula: `area = 0.5 * abs((x1*(y2 - y3) + x2*(y3 - y1) + x3*(y1 - y2)))`. This formula uses the determinant method to compute the area based on vertex coordinates."},

        {question: "What is the significance of the view matrix in 3D graphics?", answer: "The view matrix defines the camera's position and orientation in 3D space. It transforms world coordinates into camera or view space, allowing you to render the scene from the camera's perspective. The view matrix is typically computed based on the camera's position, target, and up vector."},

        {question: "How do you perform collision detection between a point and a sphere?", answer: "To detect collision between a point and a sphere, calculate the distance from the point to the sphere's center. If this distance is less than or equal to the sphere's radius, a collision has occurred. Use the formula: `distance = length(point - sphereCenter)` and check if `distance <= sphereRadius`."},

        {question: "What is the purpose of mipmapping in texture rendering?", answer: "Mipmapping is a technique used to improve texture rendering quality and performance by creating and using multiple precomputed texture levels at different resolutions. Mipmaps reduce aliasing and improve rendering speed by selecting the appropriate texture level based on the distance from the camera and size of the texture on the screen."},

        {question: "How do you calculate the field of view (FOV) in a perspective projection matrix?", answer: "The field of view (FOV) is used to define the vertical angle of the camera's view frustum. In a perspective projection matrix, it affects the depth of the view. The FOV can be calculated from the vertical angle using trigonometric functions: `fovY = 2 * atan(tan(fovY / 2) / aspectRatio)`, where `aspectRatio` is the width-to-height ratio of the viewport."},

        {question: "How do you compute the bounding volume for a 3D object?", answer: "Bounding volumes, such as bounding boxes or spheres, approximate the shape of a 3D object. For a bounding box, compute the minimum and maximum coordinates of the object’s vertices. For a bounding sphere, calculate the center of the object and the maximum distance from this center to any vertex."},

        {question: "What is the purpose of the projection matrix in 3D graphics?", answer: "The projection matrix is used to transform 3D coordinates into 2D screen coordinates. It defines how objects are projected onto the screen, influencing perspective and depth. There are two main types of projection matrices: perspective (for realistic depth) and orthographic (for uniform scaling)."},

        {question: "How do you calculate the length of a vector in 3D space?", answer: "The length (or magnitude) of a vector `v` with components `(x, y, z)` in 3D space is calculated using the formula: `length(v) = sqrt(x^2 + y^2 + z^2)`. This measurement is essential for normalizing vectors and determining distances between points in 3D space."},

        {question: "What is the purpose of using Euler angles in 3D transformations?", answer: "Euler angles are used to represent rotations in 3D space as a sequence of three angles corresponding to rotations around the x, y, and z axes. They are useful for specifying and controlling orientation but can suffer from gimbal lock, which can be mitigated using quaternions."},

        {question: "How do you apply a shear transformation to a 2D object?", answer: "Shear transformation involves shifting parts of an object in one direction while keeping others fixed, creating a skewed effect. In 2D, a shear matrix for factors `shx` and `shy` is: `mat2 = [1, shx; shy, 1]`. Multiply this matrix with the object's vertex positions to apply the shear transformation."},

        {question: "How do you calculate the centripetal force required for an object moving in a circular path?", answer: "The centripetal force required for an object of mass `m` moving with velocity `v` in a circle of radius `r` is calculated using the formula: `F = (m * v^2) / r`. This force is directed towards the center of the circular path and is essential for simulating circular motion in games."},

        {question: "What is the significance of using spherical coordinates in 3D graphics?", answer: "Spherical coordinates are used to define positions in 3D space with a radius, polar angle, and azimuthal angle. They are useful for representing positions on a sphere and for spherical effects, such as cameras orbiting around a point. Converting to Cartesian coordinates involves formulas using trigonometric functions."},

        {question: "How do you calculate the moment of inertia for a rotating object?", answer: "The moment of inertia quantifies an object's resistance to rotational motion. For simple shapes, it is calculated using standard formulas. For example, for a solid sphere, `I = (2/5) * m * r^2`, where `m` is the mass and `r` is the radius. This value is used in physics simulations for realistic rotational behavior."},

        {question: "What is a Bezier curve, and how is it used in game development?", answer: "A Bézier curve is a parametric curve defined by control points. In game development, Bézier curves are used for smooth animations, paths, and shapes. The simplest Bézier curve is a quadratic Bézier curve defined by three control points. Higher-order curves involve more control points for more complex shapes."},

        {question: "How do you compute the distance from a point to a plane in 3D space?", answer: "To compute the distance from a point to a plane in 3D space, use the formula: `distance = abs((Ax * Px + By * Py + Cz * Pz + D) / sqrt(A^2 + B^2 + C^2))`, where `(Ax, By, Cz)` are the plane's normal vector components, `(Px, Py, Pz)` are the point's coordinates, and `D` is the plane's constant term."},

        {question: "What is the significance of using the normal vector in lighting calculations?", answer: "The normal vector is crucial in lighting calculations as it defines the orientation of a surface. It is used to calculate how light interacts with the surface, including effects like diffuse and specular reflection. The dot product of the normal and light direction vectors determines the intensity of the light hitting the surface."},

        {question: "How do you perform an axis-angle rotation in 3D graphics?", answer: "Axis-angle rotation involves rotating an object around a specified axis by a given angle. The rotation is represented by a rotation matrix or quaternion. For a matrix, use: `R = I + sin(angle) * K + (1 - cos(angle)) * K^2`, where `K` is the skew-symmetric matrix of the axis, and `I` is the identity matrix."}
    ];
    localStorage.setItem("flash-cards", JSON.stringify(gameMathQuestions));
    location.reload();
}