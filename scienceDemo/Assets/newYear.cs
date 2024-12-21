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
        tempFactor();
        WindowGraph.populations["Magikarp"].Add(new int[2] { WindowGraph.count, Mathf.RoundToInt(0.4f * (1f - variables["snapperFishing"]) * tempFactor())});
        Debug.Log(Mathf.RoundToInt(fishScript.fishList[0].population * (0.4f * (1f - variables["snapperFishing"]) * tempFactor())));
        WindowGraph.populations["Feebas"].Add(new int[2] { WindowGraph.count, 100 - (int)variables["storm"] });
        WindowGraph.populations["Remoraid"].Add(new int[2] { WindowGraph.count, (int)(Random.value * 100)});
        WindowGraph.count++;
    }
   public float tempFactor() {
        return Mathf.Max(0, Mathf.Min(1, (variables["temp"] - 18) / 10));
    }
}
