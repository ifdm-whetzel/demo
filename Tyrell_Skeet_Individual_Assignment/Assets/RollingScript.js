#pragma strict

public var universe1:Material;
public var universe2:Material;
public var universe3:Material;
public var universe4:Material;

var currentUniverse = 1;

function Start () {

}

function Update () {

	if(Input.GetKeyUp(KeyCode.G)) {
		

		if(currentUniverse == 1) {
			currentUniverse++;
			RenderSettings.skybox = universe2;
		} else if (currentUniverse == 2) {
			currentUniverse++;
			RenderSettings.skybox = universe3;
		} else if (currentUniverse == 3) {
			currentUniverse++;
			RenderSettings.skybox = universe4;
		} else {
			currentUniverse = 1;
			RenderSettings.skybox = universe1;
		}
	}
}