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
            {"temp",0},
            {"yellowtailFishing",0},
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
        float yellowtailRates = .8f + ((0.4f * (1f - variables["yellowtailFishing"]/100f) * tempFactor()));
       
 
    }
   public float tempFactor() {
        return Mathf.Max(0, Mathf.Min(1, (variables["temp"] - 18) / 10));
    }
}
