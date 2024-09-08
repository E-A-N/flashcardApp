globalRoutines.angles = () => {    
    let quizArray = [
        {
            question: "What does SOH-CAH-TOA stand for in trigonometry?",
            answer: "SOH-CAH-TOA is a mnemonic for remembering the definitions of sine, cosine, and tangent functions in a right-angled triangle: SOH = Sine = Opposite / Hypotenuse, CAH = Cosine = Adjacent / Hypotenuse, TOA = Tangent = Opposite / Adjacent."
        },
        {
            question: "How do you calculate the sine of an angle in JavaScript?",
            answer: "In JavaScript, the sine of an angle (in radians) can be calculated using `Math.sin(angle)`, where `angle` is the angle in radians."
        },
        {
            question: "How do you find the cosine of an angle using SOH-CAH-TOA?",
            answer: "Using SOH-CAH-TOA, the cosine of an angle is calculated as the ratio of the length of the adjacent side to the length of the hypotenuse in a right-angled triangle."
        },
        {
            question: "What is the formula for calculating the tangent of an angle in a right-angled triangle?",
            answer: "The formula for calculating the tangent of an angle is `Tangent = Opposite / Adjacent`, where 'Opposite' is the length of the side opposite the angle, and 'Adjacent' is the length of the side adjacent to the angle."
        },
        {
            question: "How do you convert radians to degrees in JavaScript?",
            answer: "To convert radians to degrees in JavaScript, use the formula `degrees = radians * (180 / Math.PI)`."
        },
        {
            question: "What does the `Math.atan()` function compute in JavaScript?",
            answer: "`Math.atan()` computes the arctangent of a number, returning the angle in radians whose tangent is the specified number."
        },
        {
            question: "How do you compute the angle between two vectors in 2D space?",
            answer: "In 2D space, the angle between two vectors can be computed using the dot product formula: `cos(θ) = (A · B) / (|A| * |B|)`, where `A` and `B` are the vectors. The angle `θ` is then found using `θ = Math.acos(cos(θ))`."
        },
        {
            question: "What is the role of angles in collision detection in game physics?",
            answer: "In collision detection, angles help determine the relative orientation of objects. For instance, the angle of impact can affect how objects bounce off each other, influencing their new trajectories."
        },
        {
            question: "How can you use the `Math.atan2()` function to find the direction of a vector?",
            answer: "`Math.atan2(y, x)` returns the angle between the positive x-axis and the vector `(x, y)`, which helps in finding the direction of the vector in a 2D coordinate system."
        },
        {
            question: "What is the difference between azimuth and inclination angles?",
            answer: "Azimuth is the angle measured in the horizontal plane from a reference direction (usually north), while inclination is the angle measured from the vertical axis (elevation angle)."
        },
        {
            question: "How do you interpolate between two angles in JavaScript?",
            answer: "To interpolate between two angles `angle1` and `angle2`, you can use linear interpolation: `angle = angle1 + t * (angle2 - angle1)`, where `t` is a parameter between 0 and 1. For angles in degrees, consider handling wraparound at 360 degrees."
        },
        {
            question: "What is spherical linear interpolation (SLERP) and when is it used?",
            answer: "Spherical Linear Interpolation (SLERP) is used to interpolate between two orientations represented as quaternions. It's commonly used in 3D graphics to smoothly transition between rotational states."
        },
        {
            question: "How do you handle angle wrapping in interpolation?",
            answer: "When interpolating angles, you need to handle the wraparound case. For angles in degrees, calculate the shortest path between the two angles to avoid large jumps, typically using modulo operations or wrapping functions."
        },
        {
            question: "What is the purpose of the `Math.acos()` function in JavaScript?",
            answer: "`Math.acos()` returns the arccosine of a number, which is the angle in radians whose cosine is the specified number. It is useful for finding angles from cosine values."
        },
        {
            question: "How can you use trigonometric functions to calculate the position of an object moving in a circular path?",
            answer: "To calculate the position of an object moving in a circular path, use `x = cx + r * Math.cos(angle)` and `y = cy + r * Math.sin(angle)`, where `(cx, cy)` is the center of the circle, `r` is the radius, and `angle` is the current angle in radians."
        },
        {
            question: "What is the tangent of 45 degrees in JavaScript?",
            answer: "The tangent of 45 degrees is `1`. In JavaScript, you can compute this by converting 45 degrees to radians and then using `Math.tan()`: `Math.tan(45 * (Math.PI / 180))`."
        },
        {
            question: "How do you calculate the elevation angle of an object in a 3D coordinate system?",
            answer: "The elevation angle can be calculated using the vertical component of the vector from the origin to the object. If `z` is the vertical height and `r` is the distance from the origin in the horizontal plane, the elevation angle `θ` is given by `θ = Math.atan2(z, r)`."
        },
        {
            question: "How do you calculate the angle of elevation to a point above you using trigonometry?",
            answer: "To calculate the angle of elevation to a point above you, use the formula `angle = Math.atan(height / distance)`, where `height` is the vertical distance to the point and `distance` is the horizontal distance."
        },
        {
            question: "How do you use trigonometric functions to solve a right-angled triangle problem?",
            answer: "Use the trigonometric functions based on known sides or angles. For example, to find an angle, use `Math.asin()` for sine, `Math.acos()` for cosine, and `Math.atan()` for tangent, depending on which sides of the triangle you know."
        },
        {
            question: "What is the use of the `Math.degrees()` function in some programming languages for angle conversion?",
            answer: "While JavaScript does not have a `Math.degrees()` function, in some languages, this function converts radians to degrees. In JavaScript, you use `radians * (180 / Math.PI)` to achieve this conversion."
        },
        {
            question: "How do you calculate the angle between two vectors in 3D space?",
            answer: "To find the angle between two 3D vectors, use the dot product formula: `cos(θ) = (A · B) / (|A| * |B|)`, then compute the angle using `θ = Math.acos(cos(θ))`."
        },
        {
            question: "What is the law of sines and how is it used in triangle problems?",
            answer: "The law of sines states that `a / sin(A) = b / sin(B) = c / sin(C)`, where `a`, `b`, and `c` are the sides of the triangle, and `A`, `B`, and `C` are the opposite angles. It is used to find unknown angles or sides in a triangle when some angles and sides are known."
        },
        {
            question: "How do you calculate the angle between a vector and the x-axis in 2D space?",
            answer: "The angle between a vector `(x, y)` and the x-axis is calculated using `Math.atan2(y, x)`, which gives the angle in radians."
        },
        {
            question: "How can you find the angular difference between two angles in degrees?",
            answer: "To find the angular difference between two angles `angle1` and `angle2`, compute `Math.abs(angle1 - angle2)`. If the result is greater than 180 degrees, subtract it from 360 degrees to get the smallest angle between them."
        },
        {
            question: "What is the formula for calculating the angle of rotation in a 2D graphics context?",
            answer: "In a 2D graphics context, the angle of rotation can be set directly using trigonometric functions or transformation matrices. For example, to rotate a point around the origin by an angle `θ`, use transformation equations involving `Math.cos(θ)` and `Math.sin(θ)`."
        },
        {
            question: "How do you interpolate angles when working with rotation in animation?",
            answer: "For smooth rotation interpolation, use spherical linear interpolation (SLERP) for quaternions or linear interpolation for angles. Ensure to handle wraparound to maintain consistent rotation direction."
        },
        {
            question: "What is the difference between a bearing and an azimuth?",
            answer: "Both bearing and azimuth are used to describe directions. Bearing typically refers to directions relative to a reference direction (like north), while azimuth is the angle measured clockwise from the north direction."
        },
        {
            question: "How do you compute the angle of incidence of a light ray striking a surface?",
            answer: "The angle of incidence is the angle between the incoming light ray and the normal to the surface at the point of incidence. It can be calculated using the dot product between the light direction vector and the surface normal vector."
        },
        {
            question: "How do you calculate the angle of rotation required to align two vectors in 3D space?",
            answer: "The angle of rotation required to align two vectors in 3D space can be found using the dot product: `cos(θ) = (A · B) / (|A| * |B|)`, then compute the angle using `θ = Math.acos(cos(θ))`."
        },
        {
            question: "How do you use `Math.atan2()` to calculate the angle between two points in 2D space?",
            answer: "To calculate the angle between two points `(x1, y1)` and `(x2, y2)`, first determine the differences `dx = x2 - x1` and `dy = y2 - y1`. Then use `Math.atan2(dy, dx)` to find the angle in radians."
        },
        {
            question: "What is the significance of the angle of depression in navigation and surveying?",
            answer: "The angle of depression is the angle between the horizontal line of sight and the line of sight down to a point below the observer. It is used in navigation and surveying to determine distances and elevations."
        },
        {
            question: "How do you find the angle of rotation required to match a target orientation in a 3D game?",
            answer: "To match a target orientation, compute the angle between the current orientation and the target orientation using quaternion or matrix transformations. Apply the rotation incrementally to smoothly align the object."
        },
        {
            question: "How do you compute the angular velocity from angular displacement and time?",
            answer: "Angular velocity is calculated by dividing the angular displacement (change in angle) by the time taken. The formula is `ω = Δθ / Δt`, where `Δθ` is the change in angle and `Δt` is the time interval."
        },
        {
            question: "What is the significance of Euler angles in 3D rotations?",
            answer: "Euler angles describe rotation about the coordinate axes. They are used in 3D graphics and physics to define orientation but can suffer from gimbal lock, which makes alternative representations like quaternions preferable in some cases."
        }
    ];

    localStorage.setItem("flash-cards", JSON.stringify(quizArray));
    if (typeof startTest === "function"){
        startTest();
    }
}
