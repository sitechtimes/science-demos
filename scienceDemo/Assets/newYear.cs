using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class newYear : MonoBehaviour
{
    public GameObject fishHolder;
    // [SerializeField] private UnityEvent addPopData;
    public void clicked(){
        Debug.Log(fishManager.variables);
        foreach(var variable in fishManager.variables){
            Debug.Log(variable);
        }
        foreach (Transform child in fishHolder.transform)
        {
            GameObject.Destroy(child.gameObject);
        }
        // addPopData.Invoke();
    }
}
