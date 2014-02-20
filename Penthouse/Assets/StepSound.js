#pragma strict

function Start () {

}

function Update () {
	if (Input.GetButton("Horizontal"))
	{
		audio.Play();
	}
}