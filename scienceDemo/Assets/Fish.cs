using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "New Fish", menuName = "Fish")]
public class Fish : ScriptableObject
{
    public new string name;
    public Sprite image;
    public float speed;
    public float waveSpeed;
    public float waveDistance;
    public Vector3 scale;
    public int population;


}
