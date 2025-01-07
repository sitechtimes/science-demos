using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.Linq;
using TMPro;
public class WindowGraph : MonoBehaviour
{

    [SerializeField] private RectTransform graphContainer;
    [SerializeField] private RectTransform yAxisHolder;
    [SerializeField] private RectTransform xAxisHolder;
    [SerializeField] private RectTransform holder;
    [SerializeField] private RectTransform axes;
    [SerializeField] private Sprite circleSprite;
    [SerializeField] private ScrollRect scrollRect;
    private Vector2 lastCircle;
    public static int count = 0;
    private int index = 0;
    public GameObject fishHolder;
    public GameObject textPrefab;
    private Color[] colors = new Color[] { Color.red, Color.blue, Color.green, Color.white, Color.yellow, Color.black };
    public static Dictionary<string, List<int[]>> populations = new Dictionary<string, List<int[]>>();
    private Dictionary<string, bool> showingInfo = new Dictionary<string, bool>();

    void Start()
    {
        reset();
    }
    public void reset()
    {
        holder.localPosition = Vector3.zero;
        count = 0;

        foreach (Fish fish in fishScript.fishList)
        {
            populations[fish.name] = new List<int[]>();
            showingInfo.Add($"{fish.name}Item", true);
            populations[fish.name].Add(new int[2] { count, fish.population });
        }
        count++;
        foreach (Transform child in fishHolder.transform)
        {
            GameObject.Destroy(child.gameObject);
        }
        createGraph();
    }

    public void createGraph()
    {
        Vector2 oPos = holder.localPosition;
        holder.localPosition = Vector3.zero;
        foreach (Transform child in holder)
        {
            if (child.tag != "ActiveCheck" && child.tag != "test")
            {
                Destroy(child.gameObject);
            }
        }
        foreach (Transform child in axes)
        {
            if (child.tag != "ActiveCheck")
            {
                Destroy(child.gameObject);
            }
        }
        foreach (Transform child in yAxisHolder)
        {
            if (child.tag != "ActiveCheck")
            {
                Destroy(child.gameObject);
            }
        }
        lastCircle = new Vector2(0, 0);
        index = 0;
        float largest = populations.SelectMany(kvp => kvp.Value).SelectMany(arr => arr).Max();
        
        int r = 1;
        while (holder.rect.width >= graphContainer.rect.width / 10 * r)
        {
            float x = (graphContainer.rect.width / 10 * r);
            r++;
            createAxisX(x);
            createNumberX(x, largest, r);
        }
        for (int n = 1; n < 7; n++)
        {
            float y = (graphContainer.rect.height / 7 * n) - graphContainer.rect.height * .5f;
            createAxisY(y);
            createNumberY(y, largest, n);
        }

        foreach (var key in populations.Keys)
        {
            foreach (var point in populations[key])
            {
                float x = (graphContainer.rect.width / 10 * (point[0] + 1));
                float y = ((graphContainer.rect.height * (point[1] / largest)) - graphContainer.rect.height * .5f) * .85f;

                createPoint(new Vector2((int)x, (int)y), key);
            }
            lastCircle = new Vector2(0, 0);
            index++;
        }
        holder.localPosition = oPos;
    }

    public void createNumberX(float x, float largest, int r)
    {
        GameObject textObject = Instantiate(textPrefab, holder);

        RectTransform textRect = textObject.GetComponent<RectTransform>();

        textRect.anchoredPosition = new Vector2(x, xAxisHolder.rect.height * .5f);

        textRect.pivot = new Vector2(0.5f, 0.5f);
        textRect.anchorMin = new Vector2(0, 0);
        textRect.anchorMax = new Vector2(0, 0);

        TextMeshProUGUI text = textObject.GetComponent<TextMeshProUGUI>();
        text.text = (r - 1).ToString();
    }


    public void createNumberY(float y, float largest, int n)
    {
        GameObject textObject = Instantiate(textPrefab, yAxisHolder);

        RectTransform textRect = textObject.GetComponent<RectTransform>();

        textRect.anchoredPosition = new Vector2(0, y + yAxisHolder.rect.height * .5f);

        textRect.pivot = new Vector2(0.5f, 0.5f);
        textRect.anchorMin = new Vector2(0.5f, 0);
        textRect.anchorMax = new Vector2(0.5f, 0);

        TextMeshProUGUI text = textObject.GetComponent<TextMeshProUGUI>();
        text.text = (largest * (n + 1f) / 7f).ToString("F1");

    }

    public void createAxisX(float x)
    {
        GameObject line = new GameObject($"xAxis{x}", typeof(Image));
        line.transform.SetParent(graphContainer, false);
        RectTransform rectTransform = line.GetComponent<RectTransform>();
        line.GetComponent<Image>().color = new Color(1f, 1f, 1f, 0.5f);
        Vector2 anchorMin = rectTransform.anchorMin;
        Vector2 anchorMax = rectTransform.anchorMax;

        anchorMin.x = graphContainer.anchorMin.x;
        anchorMax.x = graphContainer.anchorMax.x;

        rectTransform.sizeDelta = new Vector2(graphContainer.rect.height, 5);
        rectTransform.anchoredPosition = new Vector2(x, 0);
        rectTransform.localRotation = Quaternion.Euler(0, 0, 90);

        line.transform.SetParent(axes, true);

    }
    public void createAxisY(float y)
    {
        GameObject line = new GameObject($"yAxis{y}", typeof(Image));
        line.transform.SetParent(graphContainer, false);
        RectTransform rectTransform = line.GetComponent<RectTransform>();
        line.GetComponent<Image>().color = new Color(1f, 1f, 1f, 0.5f);
        Vector2 anchorMin = rectTransform.anchorMin;
        Vector2 anchorMax = rectTransform.anchorMax;

        anchorMin.x = graphContainer.anchorMin.x;
        anchorMax.x = graphContainer.anchorMax.x;

        rectTransform.sizeDelta = new Vector2(holder.rect.width, 5);
        rectTransform.anchoredPosition = new Vector2(holder.rect.width * .5f, y);

        line.transform.SetParent(axes, true);

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

        gameObject.tag = $"{fishName}Item";

        rectTransform.anchoredPosition = anchoredPos;

        rectTransform.sizeDelta = new Vector2(50, 50);

        if (lastCircle != new Vector2(0, 0))
        {
            createLine(lastCircle, anchoredPos, fishName);
        }
        lastCircle = anchoredPos;
        gameObject.transform.SetParent(holder, true);
        gameObject.SetActive(showingInfo[$"{fishName}Item"]);
    }

    public void createLine(Vector2 oldPoint, Vector2 newPoint, string fishName)
    {
        GameObject line = new GameObject("line", typeof(Image));
        line.tag = $"{fishName}Item";
        line.transform.SetParent(graphContainer, false);
        RectTransform rectTransform = line.GetComponent<RectTransform>();
        line.GetComponent<Image>().color = colors[index];
        Vector2 anchorMin = rectTransform.anchorMin;
        Vector2 anchorMax = rectTransform.anchorMax;

        anchorMin.x = graphContainer.anchorMin.x;
        anchorMax.x = graphContainer.anchorMax.x;

        Vector2 direction = (oldPoint - newPoint).normalized;
        float distance = Vector2.Distance(oldPoint, newPoint);

        rectTransform.sizeDelta = new Vector2(distance, 10);
        rectTransform.anchoredPosition = (oldPoint + newPoint) / 2;

        float angle = Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg;
        rectTransform.localRotation = Quaternion.Euler(0, 0, angle);
        line.transform.SetParent(holder, true);

        line.SetActive(showingInfo[$"{fishName}Item"]);
    }

    public void hideOnGraph(string hideThis)
    {
        foreach (Transform child in holder)
        {
            if (child.tag == hideThis)
            {
                child.gameObject.SetActive(!showingInfo[hideThis]);

            }
        }

        showingInfo[hideThis] = !showingInfo[hideThis];
     }
}