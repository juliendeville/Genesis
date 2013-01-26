
// The target we are following
var target : Transform;
// The distance in the x-z plane to the target
var distanceZ = 10.0;
// the height we want the camera to be above the target
var distanceY = 5.0;



function Update () {
	if (!target)
		return;

		transform.position.x = target.position.x;
		transform.position.y = target.position.y + distanceY;
		transform.position.z = target.position.z - distanceZ;
		
		 transform.LookAt(target);
}
