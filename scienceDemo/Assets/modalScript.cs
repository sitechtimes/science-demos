using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;


public class modalScript : MonoBehaviour
{
    [SerializeField] private TextMeshProUGUI titleText;
    [SerializeField] private TextMeshProUGUI slideText;
    void Start()
    {
        titleText.text = "oyasumi";
        slideText.text = "Close your eyes and you'll leave this dream";
    }

    public void changeText(string[] textInfo){
        Debug.Log("eaaeaeeeeeeeeeeee");
        titleText.text = "sample";
         Debug.Log(titleText.text);
        slideText.text = textInfo[1];
        Canvas.ForceUpdateCanvases();
    }
}
