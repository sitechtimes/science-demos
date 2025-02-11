let CoralReef = function () {
  let t, // checkbox status
    o, // arr of { id: "sliderComp1", obj: l.sliderComp1 }
    i, // arr of { id: "tField1", obj: l.tField1 }
    l, // stores dom manipulation
    // _, // mypond
    d, // arr of { id: "plotStaghorn", obj: l.plotStaghorn, color: "#CC0033" }
    z, // 0, incremented on advanced year
    s, // arr algae positions
    h, // [400]
    p, // [170] arr sponge
    b, // [315] arr staghorn
    v, // [425] arr star coral
    f, // [145]
    w, // [165] arr parrotfish
    C, // [135] arry angelfish
    M, // [25] arr turtle
    y, // [16] arr grouper
    S, // [120] arr snapper
    x, // huh is this lionfish// .push(1 * (5 * a).toFixed(4)) Pe; checks if x is not null or undefined, and if it is not, it updates the last value of x to be 5 * a if l.checkBox1.getStatus() is true
    P, // push(1 * (5 * a).toFixed(4)) Pe()
    I, // .push(1 * ((100 * h[e]).toFixed(4))) Ue
    F, // .push(1 * ((100 * p[e]).toFixed(4))) Ue
    O, // .push(1 * ((100 * b[e]).toFixed(4))) Ue
    Y, // .push(1 * ((100 * v[e]).toFixed(4))) Ue
    X, // .push(1 * (8 * f[e]).toFixed(4)) Ue
    R, // .push(1 * (5 * w[e]).toFixed(4)) Ue
    B, // .push(1 * (4 * C[e]).toFixed(4))Ue
    T, // .push(1 * M[e].toFixed(4)) Ue sea turtle population
    L, // .push(1 * (3 * y[e]).toFixed(4)) Ue groupers population
    k, // .push(1 * (2 * S[e]).toFixed(4)) Ue snappers population
    D, // .push(1 * (4 * x[e]).toFixed(4)) Ue lionfish
    N, // .push(1 * (3 * P[e]).toFixed(4)) Ue crown of thorns starfish
    E, // .push 1500 $e algae max
    V, // .push(1 * Math.max(b[e] + v[e], 1).toFixed(4)) $e sponges
    G, // .push(1 * Math.max(a, 1).toFixed(4)) $e staghorn coral
    U, // .push(1 * Math.max(a, 1).toFixed(4)) $e star coral
    q, // .push(1 * ((b[e] + v[e]) / 3).toFixed(4)) $e sea urchin
    H, // .push(1 * Math.min((b[e] + v[e]) / 2, 450).toFixed(4)) $e parrotfish
    W, // .push(1 * ((p[e] + b[e] + v[e]) / 3).toFixed(4)) $e angelfish
    Q, // push(1 * Math.min((p[e] + b[e] + v[e]) / 10, 40).toFixed(4)) $e sea turtles
    J, // .push(1 * Math.min((p[e] + b[e] + v[e]) / 10, 50).toFixed(4)) $e groupers
    K, // .push(1 * Math.min((p[e] + b[e] + v[e]) / 2, 400).toFixed(4)) $e snappers
    Z, // [100] max of lionfish $e
    ee, // ee.push(1 * (b[e] + v[e]).toFixed(4)) $e sum staghorn and star coral
    // ae, // used by ga for pop,density {parrotfish: 60,angelfish: 60,turtle: 24,grouper: 33.3 * 1.2,snapper: 80.16,lionfish: 60,}
    te, // arr organisms Array(e, a, 0, 0)
    // re, // ocean background opacity
    se, // divide by this number [t] to scale on graph [0.21,0.28,0.11,0.27,8.25,5.4,2.4,0.48,11.6,0.25,1,5]
    ne, // arr push 0 Y F, operated on for graph coordinates
    // ie, // arr with random num 0-3
    // le, // arr with 0 and etc
    pe, // current time , elapsed since anima tion update
    // de, // !1, whether or not demo is paused
    ge, // 685
    ce, // 655
    be = 4; // same as ae but first letter capitalcapital keys
  // rounding to 4 decimal places
  function updateYear(e) {
    // ***run all functions upon each year update
    let a, t, o, r, s;
    z++,
      l.simulationInfo.setText("Year: " + z.toFixed(0)),
      Ge(),
      (ne = []).push(O),
      ne.push(Y),
      ne.push(F),
      ne.push(I),
      ne.push(R),
      ne.push(B),
      ne.push(k),
      ne.push(L),
      ne.push(X),
      ne.push(T),
      ne.push(D),
      ne.push(N),
      (s = []),
      (o = h.length - 1),
      (s = te.algae),
      (a = h[o]),
      (t = a + s[0] * a * (1 - a / E[o]) - (s[1] * a * (w[o] + 3 * f[o])) / 4),
      h.push(1 * t.toFixed(4)),
      (s = te.sponge),
      (a = p[o]),
      (t = a + s[0] * a * (1 - a / V[o]) - (s[1] * a * (C[o] + 2 * M[o])) / 2),
      p.push(1 * t.toFixed(4)),
      (s = te.staghorn),
      (a = b[o]),
      (t =
        a * (1 - ta()) * (1 - ra() / 2) +
        s[0] * a * (1 - ra()) * (1 - a / G[o]) -
        (s[1] * a * P[o] + Ze() * a)),
      b.push(1 * t.toFixed(4)),
      (s = te.star),
      (a = v[o]),
      (t =
        a * (1 - oa()) * (1 - sa() / 2) +
        s[0] * a * (1 - sa()) * (1 - a / U[o]) -
        (s[1] * a * P[o] + (Ze() * a) / 5)),
      v.push(1 * t.toFixed(4)),
      (s = te.urchin),
      (a = f[o]),
      (t = a * (1 - i[11].obj.getValue() / 100) + s[2] * a * h[o] - s[3] * a),
      f.push(1 * t.toFixed(4)),
      (s = te.parrot),
      (a = w[o]),
      (t =
        a + s[2] * a * h[o] - s[3] * a - (y[o] + S[o] + 5 * x[o]) * a * s[1]),
      w.push(1 * t.toFixed(4)),
      (s = te.angel),
      (a = C[o]),
      (t =
        a + s[2] * a * p[o] - s[3] * a - (y[o] + S[o] + 6 * x[o]) * a * s[1]),
      C.push(1 * t.toFixed(4)),
      (s = te.turtle),
      (a = M[o]),
      (t = a + s[2] * a * p[o] - s[3] * a),
      M.push(1 * t.toFixed(4)),
      (s = te.grouper),
      (a = y[o]),
      (t = a + s[2] * a * (w[o] + C[o] + S[o] / 3) - s[3] * a),
      y.push(1 * t.toFixed(4)),
      (s = te.snapper),
      (a = S[o]),
      (t =
        a +
        s[2] * a * (w[o] + C[o]) -
        (s[3] * a * y[o]) / 10 -
        (s[3] * x[o]) / 5),
      S.push(1 * t.toFixed(4)),
      (s = te.lion),
      (a = x[o]),
      (t = a + s[2] * a * (w[o] + C[o] + y[o] + S[o]) - s[3] * a),
      x.push(1 * t.toFixed(4)),
      (s = te.thorns),
      (a = P[o]),
      (t = a + s[2] * a * (b[o] + v[o]) - s[3] * a),
      P.push(1 * t.toFixed(4)),
      $e(),
      (t = h[++o]),
      (r = E[o]),
      (h[o] = t < 0 ? 0 : r < t ? r : t),
      (t = p[o]),
      (r = V[o]),
      (p[o] = t < 0 ? 0 : r < t ? r : t),
      (t = b[o]),
      (r = G[o]),
      (b[o] = t < 0 ? 0 : r < t ? r : t),
      (t = v[o]),
      (r = U[o]),
      (v[o] = t < 0 ? 0 : r < t ? r : t),
      (t = f[o]),
      (r = q[o]),
      (f[o] = t < 0 ? 0 : r < t ? r : t),
      (t = w[o]),
      (r = H[o]),
      (w[o] = t < 0 ? 0 : r < t ? r : t),
      (t = C[o]),
      (r = W[o]),
      (C[o] = t < 0 ? 0 : r < t ? r : t),
      (t = M[o]),
      (r = Q[o]),
      (M[o] = t < 0 ? 0 : r < t ? r : t),
      (t = y[o]),
      (r = J[o]),
      (y[o] = t < 0 ? 0 : r < t ? r : t),
      (t = S[o]),
      (r = K[o]),
      (S[o] = t < 0 ? 0 : r < t ? r : t),
      (t = x[o]),
      (r = Z[o]),
      (x[o] = t < 0 ? 0 : r < t ? r : t),
      (t = P[o]),
      (r = ee[o]),
      (P[o] = t < 0 ? 0 : r < t ? r : t),
      Ue(),
      qe(),
      De(),
      pa(),
      ga("ParrotFish"),
      ga("AngelFish"),
      ga("SeaTurtle"),
      ga("Grouper"),
      ga("Snapper"),
      ga("LionFish"),
      de,
      Ne("coralReef", 25),
      h.length;
  }
  /* function Ie(e) {
      // export to csv
      let a, t, o, r, s;
      (t = []),
        (o = []),
        (s = []),
        (r = [
          "Staghorn coral",
          "Boulder star coral",
          "Sponges",
          "Algae",
          "Stoplight parrotfish",
          "Queen angelfish",
          "Yellowtail snapper",
          "Nassau grouper",
          "Long-spined sea urchin",
          "Hawkbill sea turtle",
          "Red lionfish",
          "Crown-of-thorns starfish",
        ]),
        (a = new Array()).push(t),
        a.push(o),
        t.push("Percentage data"),
        o.push("Year"),
        t.push("");
      for (let n = 0; n < d.length; n++)
        d[n].obj.getStatus() && (o.push(r[n]), s.push(n), t.push(""));
      for (let i = 0; i <= z; i++) {
        a.push(new Array()), a[i + 2].push(i.toString());
        for (n = 0; n < s.length; n++)
          a[i + 2].push((ne[s[n]][i] / se[s[n]]).toFixed(0) + "%");
        a[i + 2].push("");
      }
      o.push(""), t.push("Raw data");
      for (n = 0; n < s.length; n++) o.push(r[s[n]]);
      for (i = 0; i <= z; i++)
        for (n = 0; n < s.length; n++) a[i + 2].push(ne[s[n]][i].toFixed(0));
      exportToApiObj.exportCSV(a);
    } */
  function restartGame(e) {
    // reset everything
    if (
      ((z = 0),
      resetNumbers(),
      l.simulationInfo.setText("Year: " + z.toFixed(0)),
      De(),
      ze("blankLayerClicked"),
      Ne("coralReef", 25),
      de)
    ) {
      let a, t;
      0.1 < (t = ((a = new Date().getTime()) - pe) / 1e3) && (t = 0.1),
        (pe = a);
    }
  }
  let Ae = !((r = this).init = function () {
    // ** initial values
    // l.tabComp1.addEventListener("change", we), // graph change
    // l.tabComp2.addEventListener("change", Ce), // summary change
    // l.touchPad.addEventListener("mouseEvent", fe), // mouse change
    // l.conditions.addEventListener("onIndxSelect", Me), // div visibility
    // l.resetBtn.addEventListener("click", je), // handle button
    l.advanceBtn.addEventListener("click", Pe), // runs the main function when year is advanced
      l.restartBtn.addEventListener("click", restartGame), // reset everything
      l.exprtBtn.addEventListener("click", Ie), // export as csv
      // l.controlBtn.addEventListener("click", Re), // play pause
      // l.cameraIcon1.addEventListener("click", xe), // cam change
      // l.cameraIcon2.addEventListener("click", xe), // cam change
      // l.graphCntrl1.addEventListener("onevent", Be), // pan zoom
      // l.checkBox1.addEventListener("change", Oe), // update selected organism ->
      // l.checkBox2.addEventListener("change", Ye), // update slider values
      // l.controlBtn.setDisable("play"),
      (o = []),
      (i = []),
      (d = []),
      (t = []),
      (se = []),
      (ne = []),
      o.push({ id: "sliderComp1", obj: l.sliderComp1 }),
      o.push({ id: "sliderComp2", obj: l.sliderComp2 }),
      o.push({ id: "sliderComp3", obj: l.sliderComp3 }),
      o.push({ id: "sliderComp4", obj: l.sliderComp4 }),
      o.push({ id: "sliderComp5", obj: l.sliderComp5 }),
      o.push({ id: "sliderComp6", obj: l.sliderComp6 }),
      o.push({ id: "sliderComp7", obj: l.sliderComp7 }),
      o.push({ id: "sliderComp8", obj: l.sliderComp8 }),
      o.push({ id: "sliderComp9", obj: l.sliderComp9 }),
      o.push({ id: "sliderComp10", obj: l.sliderComp10 }),
      o.push({ id: "sliderComp11", obj: l.sliderComp11 }),
      o.push({ id: "sliderComp12", obj: l.sliderComp12 }),
      i.push({ id: "tField1", obj: l.tField1 }),
      i.push({ id: "tField2", obj: l.tField2 }),
      i.push({ id: "tField3", obj: l.tField3 }),
      i.push({ id: "tField4", obj: l.tField4 }),
      i.push({ id: "tField5", obj: l.tField5 }),
      i.push({ id: "tField6", obj: l.tField6 }),
      i.push({ id: "tField7", obj: l.tField7 }),
      i.push({ id: "tField8", obj: l.tField8 }),
      i.push({ id: "tField9", obj: l.tField9 }),
      i.push({ id: "tField10", obj: l.tField10 }),
      i.push({ id: "tField11", obj: l.tField11 }),
      i.push({ id: "tField12", obj: l.tField12 }),
      d.push({ id: "plotStaghorn", obj: l.plotStaghorn, color: "#CC0033" }),
      d.push({ id: "plotStarCoral", obj: l.plotStarCoral, color: "#666666" }),
      d.push({ id: "plotSponge", obj: l.plotSponge, color: "#FFCC99" }),
      d.push({ id: "plotAlgae", obj: l.plotAlgae, color: "#00CC66" }),
      d.push({ id: "plotPrrtfish", obj: l.plotPrrtfish, color: "#0000CC" }),
      d.push({ id: "plotAngelfish", obj: l.plotAngelfish, color: "#993399" }),
      d.push({ id: "plotSnapper", obj: l.plotSnapper, color: "#CC9966" }),
      d.push({ id: "plotGrouper", obj: l.plotGrouper, color: "#999933" }),
      d.push({ id: "plotUrchin", obj: l.plotUrchin, color: "#FF33FF" }),
      d.push({ id: "plotTurtle", obj: l.plotTurtle, color: "#FF9933" }),
      d.push({ id: "plotLionfish", obj: l.plotLionfish, color: "#00CCCC" }),
      d.push({ id: "plotThorns", obj: l.plotThorns, color: "#CCCC66" }),
      se.push(0.21),
      se.push(0.28),
      se.push(0.11),
      se.push(0.27),
      se.push(8.25),
      se.push(5.4),
      se.push(2.4),
      se.push(0.48),
      se.push(11.6),
      se.push(0.25),
      se.push(1),
      se.push(5);
    for (let e = 0; e < 12; e++)
      o[e].obj.addEventListener("slide", ye),
        o[e].obj.addEventListener("change", ye),
        i[e].obj.addEventListener("change", Se);
    for (let a = 0; a < 12; a++) t.push(Number(i[a].obj.getValue()));
    t.push(l.checkBox1.getStatus()), t.push(l.checkBox2.getStatus());
    for (a = 0; a < d.length; a++) d[a].obj.addEventListener("change", Fe);
    (s = z = 0),
      10,
      (A = []),
      (j = []),
      [],
      [],
      (g = []),
      (c = []),
      (u = []),
      (m = []),
      (ae = {
        parrotfish: 60,
        angelfish: 60,
        turtle: 24,
        grouper: 33.3 * 1.2,
        snapper: 80.16,
        lionfish: 60,
      }),
      (be = {
        ParrotFish: 60,
        AngelFish: 60,
        SeaTurtle: 24,
        Grouper: 33.3 * 1.2,
        Snapper: 80.16,
        LionFish: 60,
      }),
      (ge = 685),
      (ce = 655),
      resetNumbers(),
      Ne("coralReef", 25);
  });
  /* function Ye(e) {
    // update values for invasive
    let a, t;
    if (
      ((a = l.checkBox2.getStatus() ? 1 : 0), // invasives status
      P && // crown of thorns data, multiply by 5 and rount 4
        (0 == (t = P.length)
          ? P.push(1 * (5 * a).toFixed(4))
          : (P[t - 1] = 1 * (5 * a).toFixed(4))),
      N && // lionfish
        (0 == (t = N.length)
          ? N.push(1 * (15 * a).toFixed(4))
          : (N[t - 1] = 1 * (15 * a).toFixed(4))),
      d[11].obj.getStatus())
    ) {
      dataArr = [];
      for (let o = 0; o < ne[11].length; o++)
        dataArr.push({ x: o, y: ne[11][o] / se[11] });
      l.graph1.cleanAll(11),
        l.graph1.drawLines({ id: 11, data: dataArr, color: d[11].color });
    }
  } */
  let ke = "";
  function De() {
    // * stores independent let to display + if statements describing current simulation
    let e, a, t;
    (t = i[1].obj.getValue()),
      (a = Y.length - 1),
      (e = "<center><b>Reef conditions</b></center>"),
      (e += "<br>Storm severity: " + i[0].obj.getValue() + "%"),
      (e += "<br>Ocean temperature: " + i[1].obj.getValue() + " °C"),
      (e += "<br>Ocean pH: " + i[2].obj.getValue()),
      (e += "<br>Sediment load: " + na().toFixed(0) + " ppt"),
      (e += "<br>Nutrient load: " + ia().toFixed(0) + " ppt"),
      (e += "<br>Water clarity: " + la().toFixed(0) + "%"),
      (e += "<br>Coral cover: " + (O[a] + Y[a]).toFixed(0) + "%"),
      (e += "<br>Coral stress: " + (100 * ea()).toFixed(0) + "%"),
      (e += "<br>Total fish species: " + ha().toFixed(0)),
      (e += "<br><br><br><center><b>Summary</center><br>"),
      (ke = ""),
      25 <= t &&
        t <= 29 &&
        7.9 <= i[2].obj.getValue() &&
        0 == i[9].obj.getValue() &&
        ea() < 0.1 &&
        400 < ha() &&
        40 < O[a] + Y[a] &&
        ((e +=
          "Coral reef is healthy, with no bleaching or disease. Fish diversity is high. "),
        (ke +=
          "Coral reef is healthy, with no bleaching or disease. Fish diversity is high. ")),
      40 <= O[a] + Y[a]
        ? ((e += "Coral cover is high. "), (ke += "Coral cover is high. "))
        : 20 <= O[a] + Y[a] &&
          ((e += "Coral cover is medium. "), (ke += "Coral cover is medium. ")),
      O[a] + Y[a] < 20 &&
        ((e += "Coral cover is low. "), (ke += "Coral cover is low. ")),
      20 < F[a] &&
        ((e += "Sponge cover is high. "), (ke += "Sponge cover is high. ")),
      0 < i[9].obj.getValue() &&
        ((e += "Black-band disease is present. "),
        (ke += "Black-band disease is present. ")),
      0 < i[10].obj.getValue() &&
        ((e += "White-band disease is present. "),
        (ke += "White-band disease is present. ")),
      0 < i[11].obj.getValue() &&
        ((e += "Sea urchin disease is present. "),
        (ke += "Sea urchin disease is present. ")),
      ha() < 200 &&
        ((e += "Fish diversity is low. "), (ke += "Fish diversity is low. ")),
      0 < x[a] &&
        ((e += "Lionfish are present. "), (ke += "Lionfish are present. ")),
      0 < P[a] &&
        ((e += "Crown-of-thorns starfish are present. "),
        (ke += "Crown-of-thorns starfish are present. ")),
      50 < I[a] &&
        ((e += "Algae cover is high. "), (ke += "Algae cover is high. ")),
      0.2 < ra() &&
        ((e += "Bleaching is occurring due to high temperatures. "),
        (ke += "Bleaching is occurring due to high temperatures. ")),
      i[2].obj.getValue() < 7.9 &&
        ((e += "pH is low. "), (ke += "pH is low. ")),
      O[a] < 0.1 &&
        ((e += "Staghorn coral has died out. "),
        (ke += "Staghorn coral has died out. ")),
      Y[a] < 0.1 &&
        ((e += "Star coral has died out. "),
        (ke += "Star coral has died out. ")),
      (e += "</b>"),
      l.summaryMssg.setText(e);
  }
  function resetNumbers() {
    // resets entire function, might have all starter values
    let e, a;
    (z = 0),
      (ne = []),
      l.graph1.cleanAll(),
      (me = ue = 3),
      (p = []),
      (b = []),
      (v = []),
      (f = []),
      (w = []),
      (C = []),
      (M = []),
      (y = []),
      (S = []),
      (x = []),
      (P = []),
      (h = []).push(400),
      p.push(170),
      b.push(315),
      v.push(425),
      f.push(145),
      w.push(165),
      C.push(135),
      M.push(25),
      y.push(16),
      S.push(120),
      (e = l.checkBox1.getStatus() ? 1 : 0),
      (a = l.checkBox2.getStatus() ? 1 : 0),
      x.push(1 * (5 * e).toFixed(4)),
      P.push(1 * (5 * a).toFixed(4)),
      (I = []),
      (F = []),
      (O = []),
      (Y = []),
      (X = []),
      (R = []),
      (B = []),
      (T = []),
      (L = []),
      (k = []),
      (D = []),
      (N = []),
      (E = []),
      (V = []),
      (G = []),
      (U = []),
      (q = []),
      (H = []),
      (W = []),
      (Q = []),
      (J = []),
      (K = []),
      (Z = []),
      (ee = []),
      ne.push(O),
      ne.push(Y),
      ne.push(F),
      ne.push(I),
      ne.push(R),
      ne.push(B),
      ne.push(k),
      ne.push(L),
      ne.push(X),
      ne.push(T),
      ne.push(D),
      ne.push(N),
      $e(),
      Ge(),
      Ue(),
      pa(),
      ga("ParrotFish"),
      ga("AngelFish"),
      ga("SeaTurtle"),
      ga("Grouper"),
      ga("Snapper"),
      ga("LionFish"),
      h.length;
  }
  function $e() {
    // calculations 1
    let e, a;
    (e = h.length - 1),
      E.push(1500),
      V.push(1 * Math.max(b[e] + v[e], 1).toFixed(4)),
      (a = 1500 - (h[e] + p[e] + v[e])),
      G.push(1 * Math.max(a, 1).toFixed(4)),
      (a = 1500 - (h[e] + p[e] + b[e])),
      U.push(1 * Math.max(a, 1).toFixed(4)),
      q.push(1 * ((b[e] + v[e]) / 3).toFixed(4)),
      H.push(1 * Math.min((b[e] + v[e]) / 2, 450).toFixed(4)),
      W.push(1 * ((p[e] + b[e] + v[e]) / 3).toFixed(4)),
      Q.push(1 * Math.min((p[e] + b[e] + v[e]) / 10, 40).toFixed(4)),
      J.push(1 * Math.min((p[e] + b[e] + v[e]) / 10, 50).toFixed(4)),
      K.push(1 * Math.min((p[e] + b[e] + v[e]) / 2, 400).toFixed(4)),
      Z.push(100),
      ee.push(1 * (b[e] + v[e]).toFixed(4));
  }
  function Ge() {
    // calculations 2
    let e, a;
    (te = new Object()),
      (e = 2.1 * Je() * (0.5 + 0.5 * Ke())),
      (a = 0.001),
      (te.algae = new Array(e, a, 0, 0)),
      (e = 0.3 * (0.8 + 0.25 * Je() - He())),
      (a = 0.002),
      (te.sponge = new Array(e, a, 0, 0)),
      (e = 0.3 * (1 - ea()) * We() * Qe() * Ke() * (1 - 0.5 * He())),
      (a = 0.002),
      (te.staghorn = new Array(e, a, 0, 0)),
      (e = 0.07 * (1 - ea() / 2) * We() * Qe() * Ke() * (1 - 0.5 * He())),
      (a = 8e-4),
      (te.star = new Array(e, a, 0, 0)),
      (te.urchin = new Array(0, 0, 5e-4, 0.2)),
      (te.parrot = new Array(0, 0.0015, 0.001, 0.094 + aa() / 100)),
      (te.angel = new Array(0, 0.0011, 0.0014, 0.02 + (0.71 * aa()) / 100)),
      (te.turtle = new Array(0, 0, 4e-4, 0.025 + (0.45 * aa()) / 100)),
      (te.grouper = new Array(
        0,
        0.002,
        4e-4,
        0.12 + (aa() + 1.6 * i[7].obj.getValue()) / 100 / 8
      )),
      (te.snapper = new Array(
        0,
        0.002,
        49e-5,
        0.0542 + (aa() + 0.9 * i[8].obj.getValue()) / 100 / 3
      )),
      (te.lion = new Array(0, 0, 0.0015, 0.1 + aa() / 100 / 3)),
      (te.thorns = new Array(0, 0, 0.011 * Je(), 0.1));
  }
  function Ue() {
    // calculations 3
    let e;
    (e = h.length - 1),
      I.push(1 * ((100 * h[e]) / 1500).toFixed(4)),
      F.push(1 * ((100 * p[e]) / 1500).toFixed(4)),
      O.push(1 * ((100 * b[e]) / 1500).toFixed(4)),
      Y.push(1 * ((100 * v[e]) / 1500).toFixed(4)),
      X.push(1 * (8 * f[e]).toFixed(4)),
      R.push(1 * (5 * w[e]).toFixed(4)),
      B.push(1 * (4 * C[e]).toFixed(4)),
      T.push(1 * M[e].toFixed(4)),
      L.push(1 * (3 * y[e]).toFixed(4)),
      k.push(1 * (2 * S[e]).toFixed(4)),
      D.push(1 * (4 * x[e]).toFixed(4)),
      N.push(1 * (3 * P[e]).toFixed(4));
  }
  function qe() {
    // draw graph
    let e;
    l.graph1.cleanAll();
    for (let a = 0; a < d.length; a++)
      if (d[a].obj.getStatus()) {
        e = [];
        for (let t = 0; t < ne[a].length; t++)
          e.push({ x: t, y: ne[a][t] / se[a] });
        l.graph1.drawLines({ id: a, data: e, color: d[a].color });
      }
  }
  function He() {
    // calculations
    return (
      (0.6 * i[3].obj.getValue() +
        0.3 * i[5].obj.getValue() +
        0.05 * i[4].obj.getValue() +
        0.05 * i[0].obj.getValue()) /
      100
    );
  }
  function We() {
    // array of water temp effect on organism ?
    return [
      0.08, 0.13, 0.21, 0.32, 0.46, 0.6, 0.75, 0.88, 0.97, 1, 0.97, 0.88, 0.75,
      0.6, 0.46, 0.32, 0.21, 0.13, 0.08,
    ][Math.round(i[1].obj.getValue() - 18)];
  }
  function Qe() {
    // calculations based on ph
    let e, a;
    return (
      7.6 <= (a = i[2].obj.getValue()) && a < 7.7
        ? (e = 0.05)
        : 7.6 <= a && a < 7.7
          ? (e = 0.11)
          : 7.7 <= a && a < 7.8
            ? (e = 0.23)
            : 7.8 <= a && a < 7.9
              ? (e = 0.42)
              : 7.9 <= a && a < 8
                ? (e = 0.69)
                : 8 <= a && a < 8.1
                  ? (e = 1)
                  : 8.1 <= a && (e = 1),
      e
    );
  }
  function Je() {
    // calculations
    return (
      (0.2 * i[3].obj.getValue() +
        0.4 * i[5].obj.getValue() +
        0.3 * i[4].obj.getValue()) /
        100 +
      0.1
    );
  }
  function Ke() {
    //  calc
    return 1 - (0.5 * He() + 0.4 * Je() + (0.1 * i[0].obj.getValue()) / 100);
  }
  function Ze() {
    // calc
    return i[0].obj.getValue() / 100 / 2;
  }
  function ea() {
    // calc
    return (
      (He() + Je() + s / 100 + aa() / 100 + 3 * (1 - We()) + 3 * (1 - Qe())) /
      10
    );
  }
  function aa() {
    return Number(i[6].obj.getValue());
  }
  function ta() {
    return ((0.6 * i[10].obj.getValue()) / 100) * (0.2 + 0.8 * ea());
  }
  function oa() {
    return ((0.6 * i[9].obj.getValue()) / 100) * (0.2 + 0.8 * ea());
  }
  function ra() {
    let e;
    return (
      (e = ((0.6 + 0.4 * ea()) * Math.exp(i[1].obj.getValue() - 27)) / 700),
      (e = Math.min(e, 1))
    );
  }
  function sa() {
    let e;
    return (
      (e = ((0.6 + 0.4 * ea()) * Math.exp(i[1].obj.getValue() - 27)) / 1500),
      (e = Math.min(e, 1))
    );
  }
  function na() {
    return 500 * He();
  }
  function ia() {
    return 40 * Je();
  }
  function la() {
    return 100 * Ke();
  }
  function ha() {
    let e, a;
    return (
      (e = p.length - 1),
      (a =
        (a =
          30 +
          (480 * (p[e] / 2 + b[e] + v[e] + w[e] + C[e] + M[e] + y[e] + S[e])) /
            1500 -
          2 * x[e]) < 6
          ? 6
          : a)
    );
  }
  function da(e) {
    // calculate population density
    let a, t;
    switch (e) {
      case "parrotfish":
        (t = R.length), (a = R[t - 1] / 2500);
        break;
      case "angelfish":
        (t = B.length), (a = B[t - 1] / 2500);
        break;
      case "turtle":
      case "seaturtle":
        (t = T.length), (a = T[t - 1] / 1e3);
        break;
      case "grouper":
        (t = L.length), (a = L[t - 1] / 1e3);
        break;
      case "snapper":
        (t = k.length), (a = k[t - 1] / 1e3);
        break;
      case "lionfish":
        (t = D.length), (a = D[t - 1] / 1e3);
    }
    return a;
  }
  function ga(e) {
    // also density calculations but comparing to base value
    let a,
      t,
      o,
      r = Math.round(((1.2 * (ge + 225)) / be[e]) * da(e.toLowerCase())),
      s = "";
    // _.myPond.emptyMainArray(e);
    for (let n = 0; n < r; n++) {
      "ParrotFish" == e
        ? ((s = "parrotfish"), 0.35 + 0.02 * (Math.random() - 0.5))
        : "AngelFish" == e
          ? ((s = "angelfish"), 0.3 + 0.03 * (Math.random() - 0.5))
          : "SeaTurtle" == e
            ? ((s = "seaTurtle"), 0.39 + 0.05 * (Math.random() - 0.5))
            : "Grouper" == e
              ? ((s = "grouper"), 0.35 + 0.05 * (Math.random() - 0.5), 1.7)
              : "Snapper" == e
                ? ((s = "snapper"), 0.3 + 0.035 * (Math.random() - 0.5))
                : "LionFish" == e &&
                  ((s = "lionfish"), 0.3 + 0.035 * (Math.random() - 0.5), 1.5),
        (a = (0.1 + 0.8 * Math.random()) * globalResizeCalc(685) * 1.2 - 60),
        (t = (0.2 + 0.55 * Math.random()) * globalResizeCalc(655) * 1.2 - 120),
        (o =
          0.3 +
          0.02 * (Math.random() - 0.5) +
          ((t / globalResizeCalc(655) - 0.45) / 0.55) * 0.15),
        "SeaTurtle" == e && (o *= 2.5),
        "Grouper" == e &&
          (0.37 +
            0.05 * (Math.random() - 0.5) +
            ((t / ce - 0.45) / 0.55) * 0.17,
          0.66 <= (o *= 1.25) && (o = 0.55)),
        Math.random() < 0.5 && (o = -o),
        t < globalResizeCalc(100) && (t = globalResizeCalc(100)),
        t > globalResizeCalc(450) && (t = globalResizeCalc(450));
      let i = {
        posX: a,
        posY: t,
        scaleX: o,
        scaleY: Math.abs(o),
        rotation: 10 * (Math.random() - 0.6),
      };
      "SeaTurtle" == e && (i.name = "turtle"),
        0 < a &&
          a < ge &&
          ((a = 0.8 * Math.random() * ge),
          (t = (0.2 + 0.55 * Math.random()) * ce));
    }
  }
  let wa = void 0;
  (this.getter = function () {
    let e = new Object();
    return (
      (e.caption = "GizmoObject"),
      (e.common = !1),
      (e.componentname = "CoralReef"),
      (e.values = {}),
      (e.values.years = z),
      (e.values.dataObj = ne),
      (e.values._algae = h),
      (e.values._sponge = p),
      (e.values._staghorn = b),
      (e.values._star = v),
      (e.values._urchin = f),
      (e.values._parrot = w),
      (e.values._angel = C),
      (e.values._turtle = M),
      (e.values._grouper = y),
      (e.values._snapper = S),
      (e.values._lion = x),
      (e.values._thorns = P),
      (e.values._algaeCover = I),
      (e.values._spongeCover = F),
      (e.values._staghornCover = O),
      (e.values._starCover = Y),
      (e.values._urchinPop = X),
      (e.values._parrotPop = R),
      (e.values._angelPop = B),
      (e.values._turtlePop = T),
      (e.values._grouperPop = L),
      (e.values._snapperPop = k),
      (e.values._lionPop = D),
      (e.values._thornsPop = N),
      (e.values._algaeCap = E),
      (e.values._spongeCap = V),
      (e.values._staghornCap = G),
      (e.values._starCap = U),
      (e.values._urchinCap = q),
      (e.values._parrotCap = H),
      (e.values._angelCap = W),
      (e.values._turtleCap = Q),
      (e.values._grouperCap = J),
      (e.values._snapperCap = K),
      (e.values._lionCap = Z),
      (e.values._thornsCap = ee),
      (e.values._coefMatrix = te),
      (e.values._isPaused = de),
      (e.values.currentPopulation = (function () {
        let e, a, t, o, r;
        (e = new Array()),
          (a = []),
          (t = []),
          (r = []),
          (o = [
            "Staghorn coral",
            "Boulder star coral",
            "Sponges",
            "Algae",
            "Stoplight parrotfish",
            "Queen angelfish",
            "Yellowtail snapper",
            "Nassau grouper",
            "Long-spined sea urchin",
            "Hawkbill sea turtle",
            "Red lionfish",
            "Crown-of-thorns starfish",
          ]),
          e.push(a),
          e.push(t),
          a.push("Percentage data"),
          t.push("Year"),
          a.push("");
        for (let s = 0; s < d.length; s++) t.push(o[s]), r.push(s), a.push("");
        for (let n = 0; n <= z; n++) {
          e.push(new Array());
          for (let s = 0; s < r.length; s++)
            e[n + 2].push(1 * (ne[r[s]][n] / se[r[s]]).toFixed(0));
          e[n + 2].push("");
        }
        t.push(""), a.push("Raw data");
        for (let s = 0; s < r.length; s++) t.push(o[r[s]]);
        for (let n = 0; n <= z; n++)
          for (let s = 0; s < r.length; s++)
            e[n + 2].push(1 * ne[r[s]][n].toFixed(0));
        for (let i = e.pop(), l = [], h = [], p = 0, n = 0; n < 12; n++)
          l.push({ name: o[p], percentage: i[n] }), p++;
        p = 0;
        for (let n = 13; n < 25; n++) h.push({ name: o[p], number: i[n] }), p++;
        return { percentage: l, rawData: h };
      })()),
      (e.values.healthOfCoral = ke),
      (n = Y.length - 1),
      (e.values.StormSeverity = 1 * i[0].obj.getValue()),
      (e.values.OceanTemperature = 1 * i[1].obj.getValue()),
      (e.values.OceanpH = 1 * i[2].obj.getValue()),
      (e.values.SedimentLoad = 1 * na().toFixed(0)),
      (e.values.NutrientLoad = 1 * ia().toFixed(0)),
      (e.values.WaterClarity = 1 * la().toFixed(0)),
      (e.values.CoralCover = 1 * (O[n] + Y[n]).toFixed(0)),
      (e.values.CoralStress = 1 * (100 * ea()).toFixed(0)),
      (e.values.TotalFishSpecies = 1 * ha().toFixed(0)),
      (e.values.currentIdentity = wa),
      (e.values.informationClosed = Ae),
      (e.settable = !0),
      (e.enabled = !0),
      (e.visible = !0),
      e
    );
  }),
    (this.setter = function (e) {
      let a = "" + Xe;
      Re({ btnType: "reset" }),
        Re({ btnType: a }),
        e.values &&
          (restartGame(),
          (z = e.values.years),
          (de = e.values._isPaused),
          (de = "" + Xe != "play"),
          (Ae = e.values.informationClosed),
          (ne = e.values.dataObj),
          (h = e.values._algae),
          (p = e.values._sponge),
          (b = e.values._staghorn),
          (v = e.values._star),
          (f = e.values._urchin),
          (w = e.values._parrot),
          (C = e.values._angel),
          (M = e.values._turtle),
          (y = e.values._grouper),
          (S = e.values._snapper),
          (x = e.values._lion),
          (P = e.values._thorns),
          (I = e.values._algaeCover),
          (F = e.values._spongeCover),
          (O = e.values._staghornCover),
          (Y = e.values._starCover),
          (X = e.values._urchinPop),
          (R = e.values._parrotPop),
          (B = e.values._angelPop),
          (T = e.values._turtlePop),
          (L = e.values._grouperPop),
          (k = e.values._snapperPop),
          (D = e.values._lionPop),
          (N = e.values._thornsPop),
          (E = e.values._algaeCap),
          (V = e.values._spongeCap),
          (G = e.values._staghornCap),
          (U = e.values._starCap),
          (q = e.values._urchinCap),
          (H = e.values._parrotCap),
          (W = e.values._angelCap),
          (Q = e.values._turtleCap),
          (J = e.values._grouperCap),
          (K = e.values._snapperCap),
          (Z = e.values._lionCap),
          (ee = e.values._thornsCap),
          (te = e.values._coefMatrix),
          pa(),
          ga("ParrotFish"),
          ga("AngelFish"),
          ga("SeaTurtle"),
          ga("Grouper"),
          ga("Snapper"),
          ga("LionFish"),
          qe(),
          l.simulationInfo.setText("Year: " + z.toFixed(0)),
          De(),
          (wa = e.values.currentIdentity),
          (ke = e.values.healthOfCoral)),
        getterSetter.isFromReset && (l.mssgBox.show(), (Ae = !1));
    });
};
