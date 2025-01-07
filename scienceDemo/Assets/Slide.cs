using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

[CreateAssetMenu(fileName = "New Slider", menuName = "Slider")]
public class Slider : ScriptableObject
{
    // public Slider slider;
    // public TextMeshProUGUI slideText;
    // public TextMeshProUGUI titleText;
    public string unit;
    public float max;
    public float min;
    public float startingValue;
    public string title;
    public string value;

}
