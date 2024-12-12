using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class newYear : MonoBehaviour
{
    public GameObject fishHolder;
    public void clicked(){
        Debug.Log(fishManager.variables);
        foreach(var variable in fishManager.variables){
            Debug.Log(variable);
        }

        foreach (Transform child in fishHolder.transform)
        {
        GameObject.Destroy(child.gameObject);
        }
    }
}
