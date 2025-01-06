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
        float yellowtailRates = 1f + ((0.4f * (1f - variables["yellowtailFishing"]/100f) * tempFactor()));
        Debug.Log(yellowtailRates);
        WindowGraph.populations["Yellowtail"].Add(new int[2] { WindowGraph.count, (int)(WindowGraph.populations["Yellowtail"][WindowGraph.populations["Yellowtail"].Count-1][1] * yellowtailRates)});
         WindowGraph.populations["Feebas"].Add(new int[2] { WindowGraph.count, (int)(WindowGraph.populations["Feebas"][WindowGraph.populations["Feebas"].Count-1][1] * (1+ (variables["storm"]-50f)/100f))});
         WindowGraph.populations["Remoraid"].Add(new int[2] { WindowGraph.count, Random.Range(10,120)});
          WindowGraph.populations["Finneon"].Add(new int[2] { WindowGraph.count, Random.Range(10,120)});
        
        // WindowGraph.populations["Feebas"].Add(new int[2] { WindowGraph.count, WindowGraph.populations["Feebas"][WindowGraph.populations["Feebas"].Count] * (int)(1+ (variables["storm"]-50)/100) });
        WindowGraph.count++;
    }
   public float tempFactor() {
        return Mathf.Max(0, Mathf.Min(1, (variables["temp"] - 18) / 10));
    }
}
