using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;

public class SliderScript : MonoBehaviour
{
    public GameObject sliderPrefab;
    public List<Slider> sliders = new List<Slider>();
    void Start()
    {
        Debug.Log("ea");
        // titleText.text = $"{title}";
        // slider.maxValue = max;
        // slider.minValue = min;
        // slider.value = startingValue;
        // slideText.text = $"{slider.value}{unit}";
        // newYear.variables[value] = slider.value;
        // slider.onValueChanged.AddListener((v) =>
        // {
        //     slider.value = Mathf.Round(v * 10) / 10;
        //     newYear.variables[value] = slider.value;
        //     slideText.text = $"{slider.value}{unit}";
        // });
    }
}