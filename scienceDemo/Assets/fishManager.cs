using System.Collections.Generic;
using UnityEngine;
using System.Collections;

public class fishManager : MonoBehaviour
{
    public GameObject fishObject;
    private int count = 0;
    // public static int fishProb;
    void Start()
    {
        StartCoroutine(SpawnFish());
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
