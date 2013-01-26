
var speed : float = 6.0;
var jumpSpeed : float = 100.0f;
var gravity : float = 20.0;

private var moveDirection : Vector3 = Vector3.zero;
private var force : Vector3 = Vector3.zero;

function Update() {
    var controller : CharacterController = GetComponent(CharacterController);
    if (controller.isGrounded) {
        // We are grounded, so recalculate
        // move direction directly from axes
        moveDirection = Vector3(Input.GetAxis("Horizontal"), 0, 0);
        moveDirection = transform.TransformDirection(moveDirection);
        moveDirection *= speed;
        
        if (Input.GetButton ("Jump")) {
        	rigidbody.AddForce( Vector3.up *jumpSpeed );
        }
    }

    // Apply gravity
    //if (!controller.isGrounded) {
    	moveDirection.y -= gravity * Time.deltaTime;
    //}
    // Move the controller
    controller.Move(moveDirection * Time.deltaTime);
}