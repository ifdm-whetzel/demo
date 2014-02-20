#pragma strict

function Start () {

}



	var projectile : GameObject;
	var fireRate : float = 0.5;
	private var nextFire : float = 0.0;
	function Update () {
		if (Input.GetButton ("Fire") && Time.time > nextFire) {
			nextFire = Time.time + fireRate;
			var clone : GameObject = 
				Instantiate(projectile, transform.position, transform.rotation) as GameObject;
		}
	}