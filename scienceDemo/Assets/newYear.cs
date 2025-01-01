using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class newYear : MonoBehaviour
{
    public GameObject fishHolder;
      public static Dictionary<string, float> variables = new Dictionary<string, float>(){
            {"storm",20f},
            {"acidity",8.1f},
            {"temp",3},
            {"snapperFishing",3},
        };
    [SerializeField] private UnityEvent addPopData;
    public void clicked()
    {
        foreach (Transform child in fishHolder.transform)
        {
            GameObject.Destroy(child.gameObject);
        }
        runCalcs();
       
        addPopData.Invoke();
    }
    public void runCalcs(){
        // tempFactor();
        WindowGraph.populations["Magikarp"].Add(new int[2] { WindowGraph.count, (int)(WindowGraph.populations["Magikarp"][WindowGraph.populations["Magikarp"].Count-1][1] * (1+ (variables["storm"]-50f)/100f))});
        // WindowGraph.populations["Feebas"].Add(new int[2] { WindowGraph.count, WindowGraph.populations["Feebas"][WindowGraph.populations["Feebas"].Count] * (int)(1+ (variables["storm"]-50)/100) });
        WindowGraph.count++;
    }
//    public float tempFactor() {
//         return Mathf.Max(0, Mathf.Min(1, (variables["temp"] - 18) / 10));
//     }
}
