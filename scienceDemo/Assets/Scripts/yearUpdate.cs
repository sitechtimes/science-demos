using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class yearUpdate : MonoBehaviour
{
    public TextMeshProUGUI yearText; 
    public void updateYear(int year)
    {
        yearText.text = "YEAR: " + year.ToString();
    }
    void Start()
    {
        updateYear(2023); 
    }
}
