using System.Collections.Generic;
using UnityEngine;
using System.Collections;


public class fishManager : MonoBehaviour
{

    public GameObject fishObject;
    private int count = 0;
    public static Dictionary<string, float> variables;

    void Start()
    {
        variables = new Dictionary<string, float>(){
            {"storm",20f},
            {"acidity",8.1f},
        };
        Debug.Log(variables["storm"]);
        StartCoroutine(SpawnFish());
    }
    void Update(){
        Debug.Log(variables["storm"]);
    }

 IEnumerator SpawnFish()
    {
        while (true)
        {
            // GameObject newFish = Instantiate(fishObject, new Vector3(10, (Random.value * 6) - 3, 0), Quaternion.identity);
    
            GameObject newFish = Instantiate(fishObject, new Vector3(10, 3, 0), Quaternion.identity);
            newFish.transform.SetParent(transform);
            newFish.name = $"Fish_{count}";  
            count++;
            yield return new WaitForSeconds(Random.value);
        }
    }
}
