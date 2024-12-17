using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class WindowGraph : MonoBehaviour
{
    [SerializeField] private RectTransform graphContainer;
    [SerializeField] private Sprite circleSprite;
    private Vector2 lastCircle;
    private int[,] points = {
    {1, 1},
    {2, 5},
    {3, -4},
    {4, 0},
    {5, 6},
    {6, -3},
    {7, 1},
    {8, 1},
    {9, -1},
    {10, -3},
};
    void Awake()
    {
        for(int i = 0; i < (points.Length/2); i++){
            Debug.Log(points[i,0]);
            createPoint(new Vector2((100 * points[i,0]) ,Random.value * 500  + (points[i,1])));
        }
        createPoint(new Vector2(0,0));
    }
public void createPoint(Vector2 anchoredPos){
    GameObject gameObject = new GameObject($"{anchoredPos} point", typeof(Image)); 
    
    gameObject.transform.SetParent(graphContainer, false);
    gameObject.GetComponent<Image>().sprite = circleSprite;
    RectTransform rectTransform = gameObject.GetComponent<RectTransform>();

    rectTransform.anchorMin = graphContainer.anchorMin;
    rectTransform.anchorMax = graphContainer.anchorMax;

    rectTransform.anchoredPosition = anchoredPos;   

    rectTransform.sizeDelta = new Vector2(10,10);

    if(lastCircle != new Vector2(0,0)){
        createLine(lastCircle, anchoredPos);
    }
    else{
        Debug.Log("I MUST CONFESS");    
    }
    lastCircle = anchoredPos;
}

public void createLine(Vector2 oldPoint, Vector2 newPoint){
        GameObject line = new GameObject("line", typeof(Image));
        line.transform.SetParent(graphContainer, false);
        RectTransform rectTransform = line.GetComponent<RectTransform>();
        Vector2 direction = (oldPoint - newPoint).normalized;
        float distance = Vector2.Distance(oldPoint, newPoint);
    
        rectTransform.sizeDelta = new Vector2(distance,10);
        rectTransform.anchoredPosition = (oldPoint/100 + newPoint/100) / 2;

        float angle = Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg;
        rectTransform.localRotation = Quaternion.Euler(0, 0, angle);
}
}