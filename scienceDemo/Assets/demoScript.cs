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

    void Start(){
        textUpdate();
    }
    public void textUpdate()
    {
        demoText.text = "e";
        foreach (var fish in fishList)
        {
            Debug.Log(WindowGraph.populations[fish.name][WindowGraph.populations[fish.name].Count-1][1]);
             demoText.text += $"{fish.name}: {(int)(WindowGraph.populations[fish.name][WindowGraph.populations[fish.name].Count-1][1])}\n";
        }
    }
}
