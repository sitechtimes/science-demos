using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI; 
using UnityEngine.Events;
public class demoScript : MonoBehaviour
{

    private string text;
    public List<Fish> fishList;  
    [SerializeField] private TextMeshProUGUI demoText;
    void Start()
    {
        updateText();
    }
    public void updateText(){
        text = "";
        Debug.Log("ssr");
        foreach(var fish in fishList){
            text += $"{fish.name}: {fish.population}\n";
        }
        demoText.text = text;
    }
}
