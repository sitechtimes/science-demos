using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "New Algae", menuName = "Algae")]
public class Algae : ScriptableObject
{
    public new string name;
    public Sprite image;
    public Vector3 scale;
    public int population;
    public string desc;

}
