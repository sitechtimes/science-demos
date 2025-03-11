using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;


public class modalScript : MonoBehaviour
{
    [SerializeField] private TextMeshProUGUI titleText;
    [SerializeField] private TextMeshProUGUI slideText;
    public static string[] textInfo = new string[] { "Click A Fish!", "" };
    public static GameObject modal;

    void Update()
    {
        titleText.text = textInfo[0];
        slideText.text = textInfo[1];
    }
    void Awake()
    {
        modal = GameObject.Find("Modal");
    }
}
