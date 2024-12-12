using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;

public class SliderScript : MonoBehaviour
{
    [SerializeField] private Slider slider;
    [SerializeField] private TextMeshProUGUI slideText;
    [SerializeField] private TextMeshProUGUI titleText;
    [SerializeField] private string unit;
    [SerializeField] private float max;
    [SerializeField] private float min;
    [SerializeField] private float startingValue;
    [SerializeField] private string title;
    [SerializeField] private string value;
    void Start(){
        titleText.text =$"{title}"; 
        slider.maxValue = max;
        slider.minValue = min;
        slider.value = startingValue;
        slideText.text = $"{slider.value}{unit}";  
        fishManager.variables[value] = slider.value;
        Debug.Log(fishManager.variables);
        slider.onValueChanged.AddListener((v) =>
        {
            slider.value = Mathf.Round(v * 10)/10;
            fishManager.variables[value] = slider.value;
            slideText.text = $"{slider.value}{unit}";   
        });
    }
}