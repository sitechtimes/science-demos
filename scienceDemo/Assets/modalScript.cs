using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;


public class modalScript : MonoBehaviour
{
    [SerializeField] private TextMeshProUGUI titleText;
    [SerializeField] private TextMeshProUGUI slideText;
    public static string[] textInfo = new string[] {"sample","sample"};
    void Start()
    {
        titleText.text = "oyasumi";
        slideText.text = "Close your eyes and you'll leave this dream";
    }

void Update(){
    titleText.text = textInfo[0];
    slideText.text = textInfo[1];
}

    public void changeText(string[] textInfo){
        Debug.Log("eaaeaeeeeeeeeeeee");
        titleText.text = "sample";
         Debug.Log(titleText.text);
        slideText.text = textInfo[1];
        Canvas.ForceUpdateCanvases();
    }
}
