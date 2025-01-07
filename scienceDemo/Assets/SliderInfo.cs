using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

[CreateAssetMenu(fileName = "New SliderInfo", menuName = "SliderInfo")]
public class SliderInfo : ScriptableObject
{
    public string unit;
    public float min;
    public float max;
    public float startingValue;
    public string title;
    public string value;

}
