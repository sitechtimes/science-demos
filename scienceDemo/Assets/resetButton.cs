using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class resetButton : MonoBehaviour
{
    [SerializeField] private UnityEvent resetData;
    public void clicked(){
        WindowGraph.populations = new Dictionary<string, List<int[]>>();
        resetData.Invoke();
    }
}
 