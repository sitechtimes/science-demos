using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;

public class SliderScript : MonoBehaviour
{
    public GameObject sliderPrefab;
    public RectTransform sliderHolder;
    public GameObject sliderHolderObject;
    public List<SliderInfo> sliders = new List<SliderInfo>();
    private float xOffset = 0;
    void Start()
    {
        Debug.Log(sliders[0]);
        foreach(SliderInfo slide in sliders){
            GameObject sliderObject = Instantiate(sliderPrefab,sliderHolder);
            RectTransform objectRect = sliderObject.GetComponent<RectTransform>();

            objectRect.transform.localPosition -= new Vector3(0, xOffset, 0);

            TextMeshProUGUI titleText = ((sliderObject.transform.Find("TitleText")).gameObject).GetComponent<TextMeshProUGUI>();
            TextMeshProUGUI dataText = ((sliderObject.transform.Find("DataText")).gameObject).GetComponent<TextMeshProUGUI>();
            Slider controller = ((sliderObject.transform.Find("Controller")).gameObject).GetComponent<Slider>();
           
            controller.maxValue = slide.max;
            controller.minValue = slide.min;
            controller.value = slide.startingValue;

            newYear.variables[slide.value] = controller.value;

            titleText.text = slide.title;
            dataText.text = $"{controller.value}{slide.unit}";
        

            controller.onValueChanged.AddListener((v) =>
        {
            controller.value = Mathf.Round(v * 10) / 10;
           newYear.variables[slide.value] = controller.value;
           
            Debug.Log(newYear.variables[slide.value]);
            dataText.text = $"{controller.value}{slide.unit}";
     
        });
        xOffset += objectRect.rect.height;
        sliderObject.transform.SetParent(sliderHolderObject.transform, true);
        }

    }
}