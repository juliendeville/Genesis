var target : Transform;
var distance = 3.0;
var height = 3.0;
var damping = 5.0;
var smoothRotation = false;
var rotationDamping = 10.0;

function Update () {
	var wantedPosition = target.TransformPoint(0, height, -distance);
	transform.position = Vector3.Lerp (transform.position, wantedPosition, Time.deltaTime * damping);
	
	transform.LookAt (target, target.up);
}
