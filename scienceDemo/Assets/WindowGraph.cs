using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class WindowGraph : MonoBehaviour
{
    [SerializeField] private RectTransform graphContainer;
    [SerializeField] private Sprite circleSprite;
    private Vector2 lastCircle;
    public static int count = 0;
    private int index = 0;
    public GameObject fishHolder;
    private Color[] colors = new Color[] { Color.red, Color.blue, Color.green, Color.white, Color.yellow, Color.black };
    public static Dictionary<string, List<int[]>> populations = new Dictionary<string, List<int[]>>();
    void Awake()
    {
        reset();
    }
    public void reset(){
        count = 0;
        populations["Magikarp"] = new List<int[]>();
        populations["Feebas"] = new List<int[]>();
        populations["Remoraid"] = new List<int[]>();
        foreach (Transform child in fishHolder.transform)
        {
            GameObject.Destroy(child.gameObject);
        }
        createGraph();
    }

    public void createGraph()
    {
        foreach (Transform child in graphContainer)
        {
            Destroy(child.gameObject);
        }
        lastCircle = new Vector2(0, 0);
        index = 0;
        foreach (var key in populations.Keys)
        {
            foreach (var point in populations[key])
            {   
                
                // createPoint(new Vector2((count > 1) ? (((graphContainer.rect.width - 60) / (count - 1)) * point[0]) + 30 -graphContainer.rect.width * .5f : 30, (point[1] - 50) * 10));
                float x = (count > 1) ? (((graphContainer.rect.width - 60) / (count - 1)) * point[0]) + 30 -graphContainer.rect.width * .5f : 30 -graphContainer.rect.width * .5f;
                float y = ((graphContainer.rect.height * (point[1]/100f)) - graphContainer.rect.height * .5f) * .85f;
                Debug.Log($"val is {point[1]}, y is {y}");
                createPoint(new Vector2((int)x,(int)y), key);
            }
            lastCircle = new Vector2(0, 0);
            index++;
        }
    }
    public void createPoint(Vector2 anchoredPos, string fishName)
    {
        GameObject gameObject = new GameObject($"{anchoredPos} point", typeof(Image));
        gameObject.transform.SetParent(graphContainer, false);
        gameObject.GetComponent<Image>().sprite = circleSprite;
        gameObject.GetComponent<Image>().color = colors[index];
        RectTransform rectTransform = gameObject.GetComponent<RectTransform>();
        Vector2 anchorMin = rectTransform.anchorMin;
        Vector2 anchorMax = rectTransform.anchorMax;

        anchorMin.x = graphContainer.anchorMin.x;
        anchorMax.x = graphContainer.anchorMax.x;

        Debug.Log(fishName);
        gameObject.tag = $"{fishName}Item";

        rectTransform.anchoredPosition = anchoredPos;

        rectTransform.sizeDelta = new Vector2(50, 50);

        if (lastCircle != new Vector2(0, 0))
        {
            createLine(lastCircle, anchoredPos, fishName);
        }
        lastCircle = anchoredPos;
    }

    public void createLine(Vector2 oldPoint, Vector2 newPoint, string fishName)
    {
        GameObject line = new GameObject("line", typeof(Image));
        gameObject.tag = $"{fishName}Item";
        line.transform.SetParent(graphContainer, false);
        RectTransform rectTransform = line.GetComponent<RectTransform>();
        line.GetComponent<Image>().color = colors[index];
        Vector2 anchorMin = rectTransform.anchorMin;
        Vector2 anchorMax = rectTransform.anchorMax;

        anchorMin.x = graphContainer.anchorMin.x;
        anchorMax.x = graphContainer.anchorMax.x;

        // rectTransform.anchorMin = anchorMin;
        // rectTransform.anchorMax = anchorMax;

        Vector2 direction = (oldPoint - newPoint).normalized;
        float distance = Vector2.Distance(oldPoint, newPoint);

        rectTransform.sizeDelta = new Vector2(distance, 10);
        rectTransform.anchoredPosition = (oldPoint + newPoint) / 2;

        float angle = Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg;
        rectTransform.localRotation = Quaternion.Euler(0, 0, angle);
    }

    void Update(){
        if(Input.GetKey("r")){
            GameObject[] objectsToHide = GameObject.FindGameObjectsWithTag("MagikarpItem");
        foreach (GameObject obj in objectsToHide)
        {
            Debug.Log(obj);
            Renderer renderer = obj.GetComponent<Renderer>();
            if (renderer != null)
            {
                renderer.enabled = false; // Disable the renderer
            }
        }
        }
    }
}