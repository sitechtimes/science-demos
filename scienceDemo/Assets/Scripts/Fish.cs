using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "New Fish", menuName = "Fish")]
public class Fish : ScriptableObject
{
    [Header("Basic Information")]
    public new string name; 
    public Sprite image;

    [Header("Movement Properties")]
    public float speed;
    public float waveSpeed;
    public float waveDistance;

    [Header("Appearance")]
    public Vector3 scale;

    [Header("Population and Description")]
    public int population;
    [TextArea]
    public string desc;
}