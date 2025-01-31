let CoralReef = function () {
    let t, // checkbox status
      o, // arr of { id: "sliderComp1", obj: l.sliderComp1 }
      i, // arr of { id: "tField1", obj: l.tField1 }
      r, // data points for each plot
      l, // stores dom manipulation
      _, // mypond
      d, // arr of { id: "plotStaghorn", obj: l.plotStaghorn, color: "#CC0033" }
      A, // array of positions staghorn coral
      j, // aray of positions star coral
      g, // {} or arry of staghorn coral positions
      c, // {} or array of star coral objects
      u, // {}
      m, // {}
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
      x, // huh is this lionfish// .push(1 * (5 * a).toFixed(ve)) Pe; checks if x is not null or undefined, and if it is not, it updates the last value of x to be 5 * a if l.checkBox1.getStatus() is true
      P, // push(1 * (5 * a).toFixed(ve)) Pe()
      I, // .push(1 * ((100 * h[e]).toFixed(ve))) Ue
      F, // .push(1 * ((100 * p[e]).toFixed(ve))) Ue
      O, // .push(1 * ((100 * b[e]).toFixed(ve))) Ue
      Y, // .push(1 * ((100 * v[e]).toFixed(ve))) Ue
      X, // .push(1 * (8 * f[e]).toFixed(ve)) Ue
      R, // .push(1 * (5 * w[e]).toFixed(ve)) Ue
      B, // .push(1 * (4 * C[e]).toFixed(ve))Ue
      T, // .push(1 * M[e].toFixed(ve)) Ue sea turtle population
      L, // .push(1 * (3 * y[e]).toFixed(ve)) Ue groupers population
      k, // .push(1 * (2 * S[e]).toFixed(ve)) Ue snappers population
      D, // .push(1 * (4 * x[e]).toFixed(ve)) Ue lionfish
      N, // .push(1 * (3 * P[e]).toFixed(ve)) Ue crown of thorns starfish
      E, // .push 1500 $e algae max
      V, // .push(1 * Math.max(b[e] + v[e], 1).toFixed(ve)) $e sponges
      G, // .push(1 * Math.max(a, 1).toFixed(ve)) $e staghorn coral
      U, // .push(1 * Math.max(a, 1).toFixed(ve)) $e star coral
      q, // .push(1 * ((b[e] + v[e]) / 3).toFixed(ve)) $e sea urchin
      H, // .push(1 * Math.min((b[e] + v[e]) / 2, 450).toFixed(ve)) $e parrotfish
      W, // .push(1 * ((p[e] + b[e] + v[e]) / 3).toFixed(ve)) $e angelfish
      Q, // push(1 * Math.min((p[e] + b[e] + v[e]) / 10, 40).toFixed(ve)) $e sea turtles
      J, // .push(1 * Math.min((p[e] + b[e] + v[e]) / 10, 50).toFixed(ve)) $e groupers
      K, // .push(1 * Math.min((p[e] + b[e] + v[e]) / 2, 400).toFixed(ve)) $e snappers
      Z, // [100] max of lionfish $e
      ee, // ee.push(1 * (b[e] + v[e]).toFixed(ve)) $e sum staghorn and star coral
      ae, // used by ga for pop,density {parrotfish: 60,angelfish: 60,turtle: 24,grouper: 33.3 * 1.2,snapper: 80.16,lionfish: 60,}
      te, // arr organisms Array(e, a, 0, 0)
      oe, // null
      re, // ocean background opacity
      se, // divide by this number [t] to scale on graph [0.21,0.28,0.11,0.27,8.25,5.4,2.4,0.48,11.6,0.25,1,5]
      ne, // arr push 0 Y F, operated on for graph coordinates
      ie, // arr with random num 0-3
      le, // arr with 0 and etc
      he, // animation timing
      pe, // current time , elapsed since anima tion update
      de, // !1, whether or not demo is paused
      ge, // 685
      ce, // 655
      ue, // default zoom level 3
      me, // default zoom level 3
      be, // same as ae but first letter capitalcapital keys
      ve = 4; // rounding to 4 decimal places
    function ye(e) {
      // update slider values
      for (let a = 0; a < 12; a++)
        if (e.id == o[a].id) {
          Te(a, e.value);
          break;
        }
    }
    function Se(e) {
      // text fields
      for (let a, t = 0; t < 12; t++)
        if (e.id == i[t].id) {
          Le(t, (a = i[t].obj.getValue())), Te(t, a);
          break;
        }
    }
    function Pe(e) {
      // ***run all functions upon each year update
      let a, t, o, r, s;
      Ee("coralReef"), // animation
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
        (t =
          a + s[0] * a * (1 - a / E[o]) - (s[1] * a * (w[o] + 3 * f[o])) / 4),
        h.push(1 * t.toFixed(ve)),
        (s = te.sponge),
        (a = p[o]),
        (t =
          a + s[0] * a * (1 - a / V[o]) - (s[1] * a * (C[o] + 2 * M[o])) / 2),
        p.push(1 * t.toFixed(ve)),
        (s = te.staghorn),
        (a = b[o]),
        (t =
          a * (1 - ta()) * (1 - ra() / 2) +
          s[0] * a * (1 - ra()) * (1 - a / G[o]) -
          (s[1] * a * P[o] + Ze() * a)),
        b.push(1 * t.toFixed(ve)),
        (s = te.star),
        (a = v[o]),
        (t =
          a * (1 - oa()) * (1 - sa() / 2) +
          s[0] * a * (1 - sa()) * (1 - a / U[o]) -
          (s[1] * a * P[o] + (Ze() * a) / 5)),
        v.push(1 * t.toFixed(ve)),
        (s = te.urchin),
        (a = f[o]),
        (t = a * (1 - i[11].obj.getValue() / 100) + s[2] * a * h[o] - s[3] * a),
        f.push(1 * t.toFixed(ve)),
        (s = te.parrot),
        (a = w[o]),
        (t =
          a + s[2] * a * h[o] - s[3] * a - (y[o] + S[o] + 5 * x[o]) * a * s[1]),
        w.push(1 * t.toFixed(ve)),
        (s = te.angel),
        (a = C[o]),
        (t =
          a + s[2] * a * p[o] - s[3] * a - (y[o] + S[o] + 6 * x[o]) * a * s[1]),
        C.push(1 * t.toFixed(ve)),
        (s = te.turtle),
        (a = M[o]),
        (t = a + s[2] * a * p[o] - s[3] * a),
        M.push(1 * t.toFixed(ve)),
        (s = te.grouper),
        (a = y[o]),
        (t = a + s[2] * a * (w[o] + C[o] + S[o] / 3) - s[3] * a),
        y.push(1 * t.toFixed(ve)),
        (s = te.snapper),
        (a = S[o]),
        (t =
          a +
          s[2] * a * (w[o] + C[o]) -
          (s[3] * a * y[o]) / 10 -
          (s[3] * x[o]) / 5),
        S.push(1 * t.toFixed(ve)),
        (s = te.lion),
        (a = x[o]),
        (t = a + s[2] * a * (w[o] + C[o] + y[o] + S[o]) - s[3] * a),
        x.push(1 * t.toFixed(ve)),
        (s = te.thorns),
        (a = P[o]),
        (t = a + s[2] * a * (b[o] + v[o]) - s[3] * a),
        P.push(1 * t.toFixed(ve)),
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
        _.myPond.drawCanvasGrass(),
        de && _.myPond.drawCanvasFish(),
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
    function _e(e) {
      // reset everything
      if (
        (Ee("coralReef"),
        (z = 0),
        Ve(),
        l.simulationInfo.setText("Year: " + z.toFixed(0)),
        De(),
        ze("blankLayerClicked"),
        Ne("coralReef", 25),
        de)
      ) {
        let a, t;
        0.1 < (t = ((a = new Date().getTime()) - pe) / 1e3) && (t = 0.1),
          (pe = a);
        for (let o = 0; o < 6; o++) he[o] += t;
        ca(t), ua(t), ma(t), ba(t), va(t), fa(t), _.myPond.drawCanvasFish();
      }
    }
    let Ae = !((r = this).init = function () {
      // ** initial values
      (l = new SpineClass()),
        (_ = new VeinClass()),
        $("#graphDiv").hide(),
        $("#summaryDiv").hide(),
        l.tabComp1.addEventListener("change", we),
        l.tabComp2.addEventListener("change", Ce),
        l.touchPad.addEventListener("mouseEvent", fe),
        l.conditions.addEventListener("onIndxSelect", Me),
        l.resetBtn.addEventListener("click", je),
        l.advanceBtn.addEventListener("click", Pe),
        l.restartBtn.addEventListener("click", _e),
        l.exprtBtn.addEventListener("click", Ie),
        l.controlBtn.addEventListener("click", Re),
        l.cameraIcon1.addEventListener("click", xe),
        l.cameraIcon2.addEventListener("click", xe),
        l.graphCntrl1.addEventListener("onevent", Be),
        l.checkBox1.addEventListener("change", Oe),
        l.checkBox2.addEventListener("change", Ye),
        l.controlBtn.setDisable("play"),
        (o = []),
        (i = []),
        (d = []),
        (t = []),
        (se = []),
        (ne = []),
        l.sliderComp1.addEventListener("visibilityChanged", function (e) {
          l.slider1Title[e.show ? "show" : "hide"]();
        }),
        l.sliderComp2.addEventListener("visibilityChanged", function (e) {
          l.slider2Title[e.show ? "show" : "hide"]();
        }),
        l.sliderComp3.addEventListener("visibilityChanged", function (e) {
          l.slider3Title[e.show ? "show" : "hide"]();
        }),
        l.sliderComp4.addEventListener("visibilityChanged", function (e) {
          l.slider4Title[e.show ? "show" : "hide"]();
        }),
        l.sliderComp5.addEventListener("visibilityChanged", function (e) {
          l.slider5Title[e.show ? "show" : "hide"]();
        }),
        l.sliderComp6.addEventListener("visibilityChanged", function (e) {
          l.slider6Title[e.show ? "show" : "hide"]();
        }),
        l.sliderComp7.addEventListener("visibilityChanged", function (e) {
          l.slider7Title[e.show ? "show" : "hide"]();
        }),
        l.sliderComp8.addEventListener("visibilityChanged", function (e) {
          l.slider8Title[e.show ? "show" : "hide"]();
        }),
        l.sliderComp9.addEventListener("visibilityChanged", function (e) {
          l.slider9Title[e.show ? "show" : "hide"]();
        }),
        l.sliderComp10.addEventListener("visibilityChanged", function (e) {
          l.slider10Title[e.show ? "show" : "hide"]();
        }),
        l.sliderComp11.addEventListener("visibilityChanged", function (e) {
          l.slider11Title[e.show ? "show" : "hide"]();
        }),
        l.sliderComp12.addEventListener("visibilityChanged", function (e) {
          l.slider12Title[e.show ? "show" : "hide"]();
        }),
        l.tField1.addEventListener("isShown", function (e) {
          l.slider1Unit[e.show ? "show" : "hide"]();
        }),
        l.tField2.addEventListener("isShown", function (e) {
          l.slider2Unit[e.show ? "show" : "hide"]();
        }),
        l.tField4.addEventListener("isShown", function (e) {
          l.slider4Unit[e.show ? "show" : "hide"]();
        }),
        l.tField5.addEventListener("isShown", function (e) {
          l.slider5Unit[e.show ? "show" : "hide"]();
        }),
        l.tField6.addEventListener("isShown", function (e) {
          l.slider6Unit[e.show ? "show" : "hide"]();
        }),
        l.tField7.addEventListener("isShown", function (e) {
          l.slider7Unit[e.show ? "show" : "hide"]();
        }),
        l.tField8.addEventListener("isShown", function (e) {
          l.slider8Unit[e.show ? "show" : "hide"]();
        }),
        l.tField9.addEventListener("isShown", function (e) {
          l.slider9Unit[e.show ? "show" : "hide"]();
        }),
        l.tField10.addEventListener("isShown", function (e) {
          l.slider10Unit[e.show ? "show" : "hide"]();
        }),
        l.tField11.addEventListener("isShown", function (e) {
          l.slider11Unit[e.show ? "show" : "hide"]();
        }),
        l.tField12.addEventListener("isShown", function (e) {
          l.slider12Unit[e.show ? "show" : "hide"]();
        }),
        l.graph1.addEventListener("isShown", function (e) {
          l.graphXLabel[e.show ? "show" : "hide"](),
            l.graphYLabel[e.show ? "show" : "hide"]();
        }),
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
        _.myPond.addEventListener("oceanAnimalSelected", ze),
        _.myPond.addEventListener("blankLayerClicked", ze),
        $("#displayDiv").bind("xBtnClicked", ze),
        $("#displayDiv").css({ overflow: "hidden" }),
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
        (re = new OceanBackground("#displayDiv")).setOpacity(1 - Ke() - 0.3),
        Ve(),
        (oe = null),
        (de = !1),
        setTimeout(function () {
          Be({ panType: "panxy", btnType: "reset" });
        }, 50),
        Ne("coralReef", 25);
    });
    function ze(e, a) {
      // create message boxes for selected organism
      let t;
      oe && $(oe).css({ "-webkit-filter": "", filter: "" }),
        "oceanAnimalSelected" == e
          ? ((oe = e.target),
            (t = D.length - 1),
            (Ae = !1),
            "Algae" == a
              ? l.mssgBox.setLabelText(
                  GlobalTextObj.algaeIntr +
                    " Current percentage cover: " +
                    I[t].toFixed(0) +
                    "%."
                )
              : "AngelFish" == a
                ? l.mssgBox.setLabelText(
                    GlobalTextObj.angelfishIntr +
                      " Current population: " +
                      B[t].toFixed(0) +
                      "."
                  )
                : "Grouper" == a
                  ? l.mssgBox.setLabelText(
                      GlobalTextObj.grouperIntr +
                        " Current population: " +
                        L[t].toFixed(0) +
                        "."
                    )
                  : "ParrotFish" == a
                    ? l.mssgBox.setLabelText(
                        GlobalTextObj.prrtfishIntr +
                          " Current population: " +
                          R[t].toFixed(0) +
                          "."
                      )
                    : "LionFish" == a
                      ? l.mssgBox.setLabelText(
                          GlobalTextObj.lionfishIntr +
                            " Current population: " +
                            D[t].toFixed(0) +
                            "."
                        )
                      : "Snapper" == a
                        ? l.mssgBox.setLabelText(
                            GlobalTextObj.snapperIntr +
                              " Current population: " +
                              k[t].toFixed(0) +
                              "."
                          )
                        : "SeaTurtle" == a
                          ? l.mssgBox.setLabelText(
                              GlobalTextObj.turtleIntr +
                                " Current population: " +
                                T[t].toFixed(0) +
                                "."
                            )
                          : "SeaUrchin" == a
                            ? l.mssgBox.setLabelText(
                                GlobalTextObj.seaUrchinIntr +
                                  " Current population: " +
                                  X[t].toFixed(0) +
                                  "."
                              )
                            : "Sponge" == a
                              ? l.mssgBox.setLabelText(
                                  GlobalTextObj.spongeIntr +
                                    " Current percentage cover: " +
                                    F[t].toFixed(0) +
                                    "%."
                                )
                              : "Starfish" == a
                                ? l.mssgBox.setLabelText(
                                    GlobalTextObj.starfishIntr +
                                      " Current population: " +
                                      N[t].toFixed(0) +
                                      "."
                                  )
                                : "StaghornCoral1" == a || "StaghornCoral2" == a
                                  ? l.mssgBox.setLabelText(
                                      GlobalTextObj.staghornCoralIntr +
                                        " Current percentage cover: " +
                                        O[t].toFixed(0) +
                                        "%."
                                    )
                                  : ("StarCoral1" != a && "StarCoral2" != a) ||
                                    l.mssgBox.setLabelText(
                                      GlobalTextObj.starCoralIntr +
                                        " Current percentage cover: " +
                                        Y[t].toFixed(0) +
                                        "%."
                                    ),
            l.mssgBox.show(),
            _.xButton.show(),
            (wa = _.myPond.getSelectedSpecies()))
          : "xBtnClicked" == e.type
            ? ((Ae = !0), l.mssgBox.hide(), _.xButton.hide(), (wa = void 0))
            : "blankLayerClicked" == e &&
              ((oe = null),
              l.mssgBox.setLabelText(
                "<br><center>Select an organism to learn more about it.</center>"
              ),
              (wa = void 0));
    }
    function Fe(e) {
      // mouseevents
      for (let a, t = 0; t < d.length; t++)
        if (
          d[t].id == e.id &&
          (l.graph1.cleanAll(t), (a = []), d[t].obj.getStatus())
        ) {
          for (let o = 0; o < ne[t].length; o++)
            a.push({ x: o, y: ne[t][o] / se[t] });
          l.graph1.drawLines({ id: t, data: a, color: d[t].color });
        }
    }
    function Oe(e) {
      // updates selected organism
      let a, t, o;
      if (
        ((a = l.checkBox1.getStatus() ? 1 : 0),
        x && (0 == (t = x.length) ? x.push(5 * a) : (x[t - 1] = 5 * a)),
        D && (0 == (t = D.length) ? D.push(20 * a) : (D[t - 1] = 20 * a)),
        d[10].obj.getStatus())
      ) {
        o = [];
        for (let r = 0; r < ne[10].length; r++)
          o.push({ x: r, y: ne[10][r] / se[10] });
        l.graph1.cleanAll(10),
          l.graph1.drawLines({ id: 10, data: o, color: d[10].color });
      }
    }
    function Ye(e) {
      // update slider values
      let a, t;
      if (
        ((a = l.checkBox2.getStatus() ? 1 : 0),
        P &&
          (0 == (t = P.length)
            ? P.push(1 * (5 * a).toFixed(ve))
            : (P[t - 1] = 1 * (5 * a).toFixed(ve))),
        N &&
          (0 == (t = N.length)
            ? N.push(1 * (15 * a).toFixed(ve))
            : (N[t - 1] = 1 * (15 * a).toFixed(ve))),
        d[11].obj.getStatus())
      ) {
        dataArr = [];
        for (let o = 0; o < ne[11].length; o++)
          dataArr.push({ x: o, y: ne[11][o] / se[11] });
        l.graph1.cleanAll(11),
          l.graph1.drawLines({ id: 11, data: dataArr, color: d[11].color });
      }
    }
    let Xe = "play";
    function Re(e) {
      // play pause
      switch (((Xe = e.btnType), e.btnType)) {
        case "play":
          (de = !1),
            l.controlBtn.setDisable("play"),
            l.controlBtn.setEnable("pause");
          break;
        case "pause":
          (de = !0),
            l.controlBtn.setDisable("pause"),
            l.controlBtn.setEnable("play");
      }
    }
    function Be(e) {
      // pan and zoom
      switch (e.panType) {
        case "panxy":
          switch (e.btnType) {
            case "reset":
              me = ue = 3;
              break;
            case "increase":
              ue < 5 ? ue++ : (ue = 5), me < 5 ? me++ : (me = 5);
              break;
            case "decrease":
              1 < ue ? ue-- : (ue = 1), 1 < me ? me-- : (me = 1);
          }
          1 == ue && 1 == me
            ? l.graphCntrl1.setDisabled("decrease")
            : 5 == ue && 5 == me
              ? l.graphCntrl1.setDisabled("increase")
              : (l.graphCntrl1.setEnabled("increase"),
                l.graphCntrl1.setEnabled("decrease")),
            a("x"),
            a("y");
          break;
        case "panx":
          switch (e.btnType) {
            case "reset":
              ue = 3;
              break;
            case "increase":
              ue < 5 ? ue++ : (ue = 5);
              break;
            case "decrease":
              1 < ue ? ue-- : (ue = 1);
          }
          1 == ue
            ? (l.graphCntrl1.setDisabled("decrease"),
              l.graphCntrl1.setEnabled("increase"))
            : (5 == ue
                ? l.graphCntrl1.setDisabled("increase")
                : l.graphCntrl1.setEnabled("increase"),
              l.graphCntrl1.setEnabled("decrease")),
            a("x");
          break;
        case "pany":
          switch (e.btnType) {
            case "reset":
              me = 3;
              break;
            case "increase":
              me < 5 ? me++ : (me = 5);
              break;
            case "decrease":
              1 < me ? me-- : (me = 1);
          }
          1 == me
            ? (l.graphCntrl1.setDisabled("decrease"),
              l.graphCntrl1.setEnabled("increase"))
            : (5 == me
                ? l.graphCntrl1.setDisabled("increase")
                : l.graphCntrl1.setEnabled("increase"),
              l.graphCntrl1.setEnabled("decrease")),
            a("y");
      }
    }
    function a(e) {
      // change zoom level based on ue me
      let a, t, o, r, s, n;
      if ("x" == e || null == e) {
        switch (ue) {
          case 1:
            (s = 5.25), (a = 10), (o = 5);
            break;
          case 2:
            (s = 10.5), (a = 10), (o = 2);
            break;
          case 3:
            (s = 26.5), (a = 5), (o = 1);
            break;
          case 4:
            (s = 53), (a = 2), (o = 1);
            break;
          case 5:
            (s = 106), (a = 1), (o = 0.2);
        }
        l.graph1.reArrangeGraph({
          leastCountX: s,
          labelIntervalX: a,
          majorIntervalX: a,
          minorIntervalX: o,
        }),
          l.graph1.setPanX(1 - l.graph1.getGraphArea().min.x);
      } else if ("y" == e) {
        switch (me) {
          case 1:
            (n = 0.75), (t = 100), (r = 20);
            break;
          case 2:
            (n = 1.5), (t = 50), (r = 10);
            break;
          case 3:
            (n = 2), (t = 50), (r = 10);
            break;
          case 4:
            (n = 3), (t = 20), (r = 10);
            break;
          case 5:
            (n = 6), (t = 10), (r = 2);
        }
        l.graph1.reArrangeGraph({
          leastCountY: n,
          labelIntervalY: t,
          majorIntervalY: t,
          minorIntervalY: r,
        }),
          l.graph1.setPanY(1 - l.graph1.getGraphArea().min.y);
      }
    }
    function Te(e, a) {
      // set opacities
      i[e].obj.setValue(Number(a)),
        (0 != e && 3 != e && 4 != e && 5 != e) || re.setOpacity(1 - Ke() - 0.3);
    }
    function Le(e, a) {
      o[e].obj.value(Number(a));
    }
    let ke = "";
    function De() {
      // * stores independent let to display + if statements describing current simulation
      let e, a, t;
      (t = i[1].obj.getValue()),
        (a = Y.length - 1),
        (e = "<center><b>Reef conditions</b></center>"),
        (e += "<br>Storm severity: " + i[0].obj.getValue() + "%"),
        (e += "<br>Ocean temperature: " + i[1].obj.getValue() + " 掳C"),
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
            ((e += "Coral cover is medium. "),
            (ke += "Coral cover is medium. ")),
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
    function Ne(e, a) {
      // animation
      (ie = []), (le = []), (he = []), (pe = new Date().getTime());
      for (let t = 0; t < 6; t++)
        ie.push(3 * (0.5 - Math.random())), le.push(0), he.push(0);
      globalAnimClassObject.stop(e),
        globalAnimClassObject.start({
          id: e,
          fps: a,
          frame: r.globalAnimationCallback,
        });
    }
    function Ee(e) {
      // animation
      globalAnimClassObject.stop(e);
    }
    function Ve() {
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
        x.push(1 * (5 * e).toFixed(ve)),
        P.push(1 * (5 * a).toFixed(ve)),
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
        _.myPond.drawCanvasGrass();
      h.length;
    }
    function $e() {
      // calculations 1
      let e, a;
      (e = h.length - 1),
        E.push(1500),
        V.push(1 * Math.max(b[e] + v[e], 1).toFixed(ve)),
        (a = 1500 - (h[e] + p[e] + v[e])),
        G.push(1 * Math.max(a, 1).toFixed(ve)),
        (a = 1500 - (h[e] + p[e] + b[e])),
        U.push(1 * Math.max(a, 1).toFixed(ve)),
        q.push(1 * ((b[e] + v[e]) / 3).toFixed(ve)),
        H.push(1 * Math.min((b[e] + v[e]) / 2, 450).toFixed(ve)),
        W.push(1 * ((p[e] + b[e] + v[e]) / 3).toFixed(ve)),
        Q.push(1 * Math.min((p[e] + b[e] + v[e]) / 10, 40).toFixed(ve)),
        J.push(1 * Math.min((p[e] + b[e] + v[e]) / 10, 50).toFixed(ve)),
        K.push(1 * Math.min((p[e] + b[e] + v[e]) / 2, 400).toFixed(ve)),
        Z.push(100),
        ee.push(1 * (b[e] + v[e]).toFixed(ve));
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
        I.push(1 * ((100 * h[e]) / 1500).toFixed(ve)),
        F.push(1 * ((100 * p[e]) / 1500).toFixed(ve)),
        O.push(1 * ((100 * b[e]) / 1500).toFixed(ve)),
        Y.push(1 * ((100 * v[e]) / 1500).toFixed(ve)),
        X.push(1 * (8 * f[e]).toFixed(ve)),
        R.push(1 * (5 * w[e]).toFixed(ve)),
        B.push(1 * (4 * C[e]).toFixed(ve)),
        T.push(1 * M[e].toFixed(ve)),
        L.push(1 * (3 * y[e]).toFixed(ve)),
        k.push(1 * (2 * S[e]).toFixed(ve)),
        D.push(1 * (4 * x[e]).toFixed(ve)),
        N.push(1 * (3 * P[e]).toFixed(ve));
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
        0.08, 0.13, 0.21, 0.32, 0.46, 0.6, 0.75, 0.88, 0.97, 1, 0.97, 0.88,
        0.75, 0.6, 0.46, 0.32, 0.21, 0.13, 0.08,
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
            (480 *
              (p[e] / 2 + b[e] + v[e] + w[e] + C[e] + M[e] + y[e] + S[e])) /
              1500 -
            2 * x[e]) < 6
            ? 6
            : a)
      );
    }
    function pa() {
      // calculates number of organisms to populate simulation (visual)
      !(function () {
        let e, a, t, o, r, s, n, i, l, h, p, d, g, c, u, m, b;
        (d = {
          posX: 263.85,
          posY: 497.75,
          scale: 1.5,
          alpha: 0.75,
          blurX: 3,
          blurY: 3,
          rotation: 0,
        }),
          (g = {
            posX: 315,
            posY: 495.8,
            scale: 1,
            alpha: 0.75,
            blurX: 3,
            blurY: 3,
            rotation: 0,
          }),
          (c = {
            posX: 231,
            posY: 492,
            scale: 1,
            alpha: 0.75,
            blurX: 3,
            blurY: 3,
            rotation: 0,
          }),
          (u = {
            posX: 500,
            posY: 310,
            scale: 1,
            alpha: 0.75,
            blurX: 3,
            blurY: 3,
            rotation: 0,
          }),
          (m = {
            posX: 380,
            posY: 330,
            scale: 0.7,
            alpha: 0.85,
            blurX: 7,
            blurY: 7,
            rotation: 0,
          }),
          (b = {
            posX: 90,
            posY: 400,
            scale: 0.7,
            alpha: 0.85,
            blurX: 7,
            blurY: 7,
            rotation: 0,
          }),
          (e = Math.round(I[I.length - 1] / 0.5)),
          (isNaN(e) || e < 0) && (e = 0);
        let v = "algae1";
        for (a = 0; a < e; a++);
        for (_.myPond.emptyMainArray("Algae"), a = 0; a < e; a++)
          0 == (r = a % 6)
            ? ((v = "algae1"), (p = Object.create(d)))
            : 1 == r
              ? ((v = "algae2"), (p = Object.create(g)))
              : 2 == r
                ? ((v = "algae1"), (p = Object.create(c)))
                : 3 == r
                  ? ((v = "algae2"), (p = Object.create(u)))
                  : 4 == r
                    ? ((v = "algae1"), (p = Object.create(m)))
                    : ((v = "algae2"), (p = Object.create(b))),
            (s = p.posX),
            (n = p.posY),
            5 < a &&
              a < 221 &&
              (r < 3
                ? ((o = 3 * Math.floor(a / 6) + r),
                  (t = Math.ceil(Math.sqrt(o - 1) - 1)),
                  (i = ((ge - p.posX) / 15) * t),
                  (h =
                    ((o - 3 - (t - 1) * (t + 1)) / (2 * t)) * Math.PI -
                    Math.PI / 2),
                  (s += i * Math.sin(h) + 15),
                  (n -=
                    s < 0.4 * ge
                      ? i * Math.cos(h) * 0.47
                      : i * Math.cos(h) * 0.32),
                  (n += 7) < 0 && (n = 0),
                  (p.scale = Math.pow((n + 50) / ce, 1.5)))
                : 3 == r
                  ? ((o = Math.floor(a / 6)),
                    (t = Math.ceil(Math.sqrt(o - 1) - 1)),
                    (l = 35 * t),
                    (i = 20 * t),
                    (h =
                      ((((o - 1 - (t - 1) * (t + 1)) / (2 * t + 1e-4)) *
                        Math.PI) /
                        3) *
                        1.5 -
                      (Math.PI / 3) * 1.2),
                    (s += i * Math.sin(h)),
                    ge < s && (s -= ge - s),
                    (n += l * (Math.cos(h) + ((o % 7) - 2) / 9)),
                    (p.scale = Math.pow(n / ce, 1)),
                    (p.rotation = (o % 9) * 7 - 20))
                  : 4 == r
                    ? ((o = Math.floor(a / 6)),
                      (t = Math.ceil(Math.sqrt(o - 1) - 1)),
                      (l = 15 * t),
                      (i = 25 * t),
                      (h =
                        (((o - 1 - (t - 1) * (t + 1)) / (2 * t + 1e-4)) *
                          Math.PI *
                          2.5) /
                          6 -
                        (Math.PI / 3) * 1.1),
                      (s += i * Math.sin(h)),
                      (n += l * (Math.cos(h) + ((o % 7) - 2) / 9)),
                      (p.scale = Math.pow(n / ce / 1.2, 1)),
                      (p.rotation = (o % 7) * 5 - 15))
                    : ((o = Math.floor(a / 6)),
                      (t = Math.ceil(Math.sqrt(o - 1) - 1)),
                      (l = 9 * t),
                      (i = 30 * t),
                      (h =
                        ((o - 1 - (t - 1) * (t + 1)) / (2 * t + 1e-4)) *
                          Math.PI -
                        Math.PI / 2),
                      (s += i * (Math.sin(h) + ((o % 7) - 2) / 9)) < 0 &&
                        (s = -s),
                      (n += l * Math.cos(h)),
                      (p.scale = Math.pow(n / ce, 1.5)))),
            (p.posX = 1.22 * globalResizeCalc(s)),
            (p.posY = 1.17 * globalResizeCalc(n)),
            (p.scale = 1.1 * p.scale),
            (p.name = "Algae"),
            _.myPond.updateMainArray(
              {
                src: gizmoImageObj[v + ".png"],
                pos: p,
                type: "grass",
                imgName: v,
              },
              "Algae"
            ),
            (p = null);
      })(),
        (function () {
          let e, a, t, o, r, s, n, i, l, h, p, d, g, c, u, m, b;
          (e = Math.round(F[F.length - 1])),
            (d = {
              posX: 392,
              posY: 311,
              scale: 0.32,
              skewX: 0,
              skewY: 0,
              rotation: 0,
            }),
            (g = {
              posX: 419,
              posY: 370,
              scale: 0.27,
              skewX: 0,
              skewY: 0,
              rotation: 0,
            }),
            (c = {
              posX: 112,
              posY: 351,
              scale: 0.25,
              skewX: 29,
              skewY: -151,
              rotation: -35,
            }),
            (u = {
              posX: 160,
              posY: 272,
              scale: 0.2,
              skewX: 29,
              skewY: 0,
              rotation: 0,
            }),
            (m = {
              posX: 172,
              posY: 322,
              scale: 0.22,
              skewX: 29,
              skewY: -151,
              rotation: -35,
            }),
            (b = {
              posX: 465,
              posY: 255,
              scale: 0.2,
              skewX: 29,
              skewY: -151,
              rotation: -10,
            }),
            (isNaN(e) || e < 0) && (e = 0);
          let v = "sponge1";
          for (_.myPond.emptyMainArray("Sponge"), a = 0; a < e; a++)
            a % 6 == 0
              ? ((v = "sponge1"), (p = Object.create(d)))
              : a % 6 == 1
                ? ((v = "sponge2"), (p = Object.create(g)))
                : a % 6 == 2
                  ? ((v = "sponge2"), (p = Object.create(c)))
                  : a % 6 == 3
                    ? ((v = "sponge1"), (p = Object.create(u)))
                    : a % 6 == 4
                      ? ((v = "sponge2"), (p = Object.create(m)))
                      : ((v = "sponge2"), (p = Object.create(b))),
              (s = p.posX),
              (n = p.posY),
              5 < a &&
                ((o = a % 6),
                a < 60 &&
                  (o < 3
                    ? ((r = 3 * Math.ceil(a / 6)),
                      (t = Math.ceil(Math.sqrt(r + o - 1) - 1)),
                      (i = (p.posX / 7) * t),
                      (h =
                        ((((r + o - 3 - (t - 1) * (t + 1)) / (2 * t)) *
                          Math.PI) /
                          2) *
                        1.2),
                      (s -= i * Math.cos(h)),
                      (n += i * Math.sin(h) * 0.22))
                    : 3 <= o && o < 5
                      ? ((r = 2 * Math.ceil(a / 6)),
                        (t = Math.ceil(Math.sqrt(r + o - 3 - 1) - 1)),
                        (i = (p.posX / 7) * t),
                        (h =
                          (((r + o - 3 - 3 - (t - 1) * (t + 1)) / (2 * t)) *
                            Math.PI) /
                          2),
                        (s -= i * Math.cos(h)),
                        (n += i * Math.sin(h) * 0.2))
                      : ((r = Math.ceil(a / 6)),
                        (t = Math.ceil(Math.sqrt(r))),
                        (l = 30 * t),
                        (i = 12 * t),
                        (h =
                          (((r - 1 - (t - 1) * (t - 1)) / (2 * t - 2)) *
                            Math.PI) /
                            2 -
                          Math.PI / 2 +
                          Math.PI / 6),
                        (s += i * (Math.sin(h) + ((r % 7) - 2) / 9)),
                        (n += l * Math.cos(h))),
                  ge < s ? (s += 2 * (ge - s)) : s < 0 && (s = -s),
                  ce < n && (n -= 2 * (n - ce)))),
              (p.posX = 1.25 * globalResizeCalc(s)),
              (p.posY = 1.25 * globalResizeCalc(n)),
              (p.scale = p.scale * Math.pow((n + 70) / ce, 1.7) * 1.85),
              _.myPond.updateMainArray(
                {
                  src: gizmoImageObj[v + ".png"],
                  pos: p,
                  type: "grass",
                  imgName: v,
                },
                "Sponge"
              ),
              (p = null);
        })(),
        (function () {
          let e, a, t, o, r, s, n, i, l, h, p;
          (n = { posX: -37, posY: 412, scale: 0.53, rotation: -12.2 }),
            (i = { posX: 57, posY: 369, scale: 0.35, rotation: 5.2 }),
            (l = { posX: 255, posY: 387, scale: 0.5, rotation: 0 }),
            (h = { posX: 288, posY: 397, scale: 0.47, rotation: 5.2 }),
            (p = { posX: 450, posY: 251, scale: 0.362, rotation: -12.2 }),
            (e = Math.round(X[X.length - 1] / 125)),
            (isNaN(e) || e < 0) && (e = 0);
          let d = "seaUrchin1";
          for (_.myPond.emptyMainArray("SeaUrchin"), a = 0; a < e; a++)
            a % 5 == 0
              ? ((d = "seaUrchin2"), (s = Object.create(n)))
              : a % 5 == 1
                ? ((d = "seaUrchin1"), (s = Object.create(i)))
                : a % 5 == 2
                  ? ((d = "seaUrchin2"), (s = Object.create(l)))
                  : a % 5 == 3
                    ? ((d = "seaUrchin1"), (s = Object.create(h)))
                    : ((d = "seaUrchin2"), (s = Object.create(p))),
              (t = s.posX),
              (o = s.posY),
              (r = 1),
              5 < a &&
                ((t = (0.1 + 0.8 * Math.random()) * ge),
                (o =
                  t < 0.6 * ge
                    ? (0.67 + 0.31 * Math.random()) * ce
                    : (0.55 + 0.42 * Math.random()) * ce)),
              (r = Math.pow(o / ce, 1.2)),
              (s.posX = 1.25 * globalResizeCalc(t)),
              (s.posY = 1.22 * globalResizeCalc(o)),
              (s.scale = s.scale * r * 1.55),
              (s.name = "SeaUrchin"),
              _.myPond.updateMainArray(
                {
                  src: gizmoImageObj[d + ".png"],
                  pos: s,
                  type: "grass",
                  imgName: d,
                },
                "SeaUrchin"
              ),
              (s = null);
        })(),
        (function () {
          let e, a, t, o, r, s, n, i, l;
          (n = { posX: 239, posY: 350, scale: 0.25, rotation: -20.2 }),
            (i = { posX: 395, posY: 395, scale: 0.35, rotation: 0.7 }),
            (l = { posX: 370, posY: 291, scale: 0.2, rotation: 10 }),
            (e = Math.round(N[N.length - 1] / 100)),
            (isNaN(e) || e < 0) && (e = 0);
          let h = "starfish1";
          for (_.myPond.emptyMainArray("Starfish"), a = 0; a < e; a++)
            a % 3 == 0
              ? ((h = "starfish1"), (s = Object.create(n)))
              : a % 3 == 1
                ? ((h = "starfish2"), (s = Object.create(i)))
                : a % 3 == 2 && ((h = "starfish1"), (s = Object.create(l))),
              (t = s.posX),
              (o = s.posY),
              (r = 1),
              2 < a &&
                ((t = (0.1 + 0.77 * Math.random()) * ge),
                (o =
                  t < 0.6 * ge
                    ? (0.67 + 0.25 * Math.random()) * ce
                    : (0.57 + 0.35 * Math.random()) * ce),
                (r = Math.pow((o + 65) / ce, 1.25)),
                a % 3 == 2 && (r *= 1.3)),
              (s.posX = 1.1 * globalResizeCalc(t)),
              (s.posY = 1.2 * globalResizeCalc(o)),
              (s.scale = s.scale * r * 1.27),
              _.myPond.updateMainArray(
                {
                  src: gizmoImageObj[h + ".png"],
                  pos: s,
                  type: "grass",
                  imgName: h,
                },
                "Starfish"
              ),
              (s = null);
        })(),
        (function () {
          let e,
            a,
            t,
            o,
            r,
            s,
            n,
            i,
            l,
            h,
            p,
            d,
            g,
            c,
            u,
            m,
            b,
            v,
            f,
            w,
            C,
            M,
            y;
          (m = { posX: -100, posY: 332, scale: 0.47, rotation: 10 }),
            (b = { posX: 102, posY: 296, scale: 0.42, rotation: 0 }),
            (v = { posX: 355, posY: 392, scale: 0.72, rotation: 0 }),
            (f = { posX: 366, posY: 230, scale: 0.35, rotation: 0 }),
            (w = { posX: 105, posY: 315, scale: 0.45, rotation: -10 }),
            (C = { posX: 215, posY: 265, scale: 0.27, rotation: -20 }),
            (M = { posX: 30, posY: 295, scale: 0.35, rotation: 10 }),
            (e = Math.round(O[O.length - 1])),
            (y = 1.29),
            (isNaN(e) || e < 0) && (e = 0);
          let S = "staghornCoral1";
          for (
            _.myPond.emptyMainArray("StaghornCoral1"),
              _.myPond.emptyMainArray("StaghornCoral2"),
              r = 0;
            r < e;
            r++
          )
            A[r] && A.pop();
          for (r = 0; r < e; r++)
            r % 7 == 0
              ? ((c = new StaghornCoral(1)),
                (u = Object.create(m)),
                (S = "staghornCoral1"),
                "staghornCoral1Bleached",
                "staghornCoral1Diseased")
              : r % 7 == 1
                ? ((c = new StaghornCoral(2)),
                  (u = Object.create(b)),
                  (S = "staghornCoral2"),
                  "staghornCoral2Bleached",
                  "staghornCoral2Diseased")
                : r % 7 == 2
                  ? ((c = new StaghornCoral(2)),
                    (u = Object.create(v)),
                    (S = "staghornCoral2"),
                    "staghornCoral2Bleached",
                    "staghornCoral2Diseased")
                  : r % 7 == 3
                    ? ((c = new StaghornCoral(1)),
                      (u = Object.create(f)),
                      (S = "staghornCoral1"),
                      "staghornCoral1Bleached",
                      "staghornCoral1Diseased")
                    : r % 7 == 4
                      ? ((c = new StaghornCoral(1)),
                        (u = Object.create(w)),
                        (S = "staghornCoral1"),
                        "staghornCoral1Bleached",
                        "staghornCoral1Diseased")
                      : r % 7 == 5
                        ? ((c = new StaghornCoral(2)),
                          (u = Object.create(C)),
                          (S = "staghornCoral2"),
                          "staghornCoral2Bleached",
                          "staghornCoral2Diseased")
                        : ((c = new StaghornCoral(1)),
                          (u = Object.create(M)),
                          (S = "staghornCoral1"),
                          "staghornCoral1Bleached",
                          "staghornCoral1Diseased"),
              (i = u.posX),
              (l = u.posY),
              6 < r &&
                ((s = Math.floor(r / 7)),
                r % 7 == 6
                  ? r < 150
                    ? ((n = Math.ceil(r / 7)),
                      (s = Math.ceil(Math.sqrt(n))),
                      (p = 11 * s),
                      (h = 27 * s),
                      (d =
                        ((n - 1 - (s - 1) * (s - 1)) / (2 * s - 2)) * Math.PI),
                      (i -= h * Math.cos(d)),
                      (l -= p * Math.sin(d)))
                    : ((h = A[0].getPos().x - A[r % 7].getPos().x),
                      (p = A[0].getPos().y - A[r % 7].getPos().y),
                      (i = A[r % 7].getPos().x + (h * (s - 10)) / (s + 15)),
                      (l = A[r % 7].getPos().y + (p * (s - 10)) / (s + 15)),
                      (i /= 1.29),
                      (l /= y))
                  : r % 7 == 3 && r < 100
                    ? ((n = Math.ceil(r / 7)),
                      (s = Math.ceil(Math.sqrt(n))),
                      (p = 20 * s),
                      (h = 22 * s),
                      (d =
                        (((n - 1 - (s - 1) * (s - 1)) / (2 * s - 2)) *
                          Math.PI *
                          2) /
                          3 -
                        Math.PI / 9),
                      (i -= h * (Math.cos(d) + ((n % 7) - 2) / 9)),
                      (l += p * Math.sin(d)))
                    : r % 7 == 5 && r < 100
                      ? ((n = Math.ceil(r / 7)),
                        (s = Math.ceil(Math.sqrt(n))),
                        (p = 25 * s),
                        (h = 15 * s),
                        (d =
                          (((n - 1 - (s - 1) * (s - 1)) / (2 * s - 2)) *
                            Math.PI *
                            3) /
                            4 -
                          Math.PI / 2 +
                          Math.PI / 6),
                        (i += h * (Math.sin(d) + ((n % 7) - 2) / 9)),
                        (l += p * Math.cos(d) - 10))
                      : r % 7 == 2 && r < 150
                        ? ((n = Math.ceil(r / 7)),
                          (s = Math.ceil(Math.sqrt(n))),
                          (p = 25 * s),
                          (h = 55 * s),
                          (d =
                            (((n - 1 - (s - 1) * (s - 1)) / (2 * s - 2)) *
                              Math.PI *
                              3) /
                              4 +
                            Math.PI / 8),
                          (i -= h * (Math.cos(d) + ((n % 11) - 2) / 15)),
                          (l -= p * Math.sin(d)))
                        : ((h =
                            A[(r % 7) + 1].getPos().x - A[r % 7].getPos().x),
                          (p = A[(r % 7) + 1].getPos().y - A[r % 7].getPos().y),
                          (i = A[r % 7].getPos().x + (h * s) / (s + 10)),
                          (l =
                            A[r % 7].getPos().y +
                            (p * s) / (s + 10) +
                            3 * ((r % 11) - 5)),
                          (i /= 1.29),
                          (l /= y))),
              (g = Math.pow((l + 20) / ce, 1.2)),
              (u.posX = 1.29 * globalResizeCalc(i)),
              (u.posY = globalResizeCalc(l) * y),
              (u.scale = u.scale * g * 1.85),
              c.reArrange(u),
              r % 7 == 0 || r % 7 == 3 || r % 7 == 4
                ? _.myPond.updateMainArray(
                    {
                      src: gizmoImageObj[S + ".png"],
                      pos: u,
                      type: "grass",
                      imgName: S,
                    },
                    "StaghornCoral1"
                  )
                : r % 7 == 1 || r % 7 == 2 || r % 7 == 5
                  ? _.myPond.updateMainArray(
                      {
                        src: gizmoImageObj[S + ".png"],
                        pos: u,
                        type: "grass",
                        imgName: S,
                      },
                      "StaghornCoral2"
                    )
                  : _.myPond.updateMainArray(
                      {
                        src: gizmoImageObj[S + ".png"],
                        pos: u,
                        type: "grass",
                        imgName: S,
                      },
                      "StaghornCoral1"
                    ),
              A.push(c),
              (u = c = null);
          let x = Math.abs(
              _.myPond.getPositionArray("StaghornCoral1").length - 1
            ),
            j = Math.abs(
              _.myPond.getPositionArray("StaghornCoral2").length - 1
            ),
            P = 0;
          (o = x + j),
            (o = e),
            (a = Math.round(ra() * o)),
            (t = Math.round(ta() * o)),
            (s = o - a - t),
            0 == z && ((s = o), (t = a = 0));
          for (r = 0; r < s; r++)
            1 * A[(P = r)].getNumber() == 1
              ? _.myPond.updateMainArrayValue(
                  "StaghornCoral1",
                  P,
                  gizmoImageObj["staghornCoral1.png"]
                )
              : _.myPond.updateMainArrayValue(
                  "StaghornCoral2",
                  P,
                  gizmoImageObj["staghornCoral2.png"]
                );
          for (r = s; r < s + a; r++)
            if (1 * A[(P = r)].getNumber() == 1) {
              let I = _.myPond.getPositionArray("StaghornCoral1").length;
              (P = I <= P ? P % I : P),
                _.myPond.updateMainArrayValue(
                  "StaghornCoral1",
                  P,
                  gizmoImageObj["staghornCoral1Bleached.png"]
                );
            } else {
              let I = _.myPond.getPositionArray("StaghornCoral2").length;
              (P = I <= P ? P % I : P),
                _.myPond.updateMainArrayValue(
                  "StaghornCoral2",
                  P,
                  gizmoImageObj["staghornCoral2Bleached.png"]
                );
            }
          for (r = s + a; r < o; r++)
            1 * A[(P = r)].getNumber() == 1
              ? _.myPond.updateMainArrayValue(
                  "StaghornCoral1",
                  P,
                  gizmoImageObj["staghornCoral1Diseased.png"]
                )
              : _.myPond.updateMainArrayValue(
                  "StaghornCoral2",
                  P,
                  gizmoImageObj["staghornCoral2Diseased.png"]
                );
        })(),
        (function () {
          let e, a, t, o, r, s, n, i, l, h, p, d, g, c, u, m, b, v, f, w, C;
          (m = { posX: -35, posY: 303, scale: 0.27, rotation: -8.5 }),
            (b = { posX: 70, posY: 287, scale: 0.25, rotation: -8.5 }),
            (v = { posX: 287, posY: 273, scale: 0.17, rotation: 0 }),
            (f = { posX: 12, posY: 367, scale: 0.37, rotation: -3 }),
            (w = { posX: 405, posY: 201, scale: 0.17, rotation: -10 }),
            (C = { posX: 293, posY: 417, scale: 0.45, rotation: 0 }),
            (e = Math.round(Y[Y.length - 1])),
            1.35,
            1.29,
            (isNaN(e) || e < 0) && (e = 0);
          let M = "starCoral1";
          for (
            _.myPond.emptyMainArray("StarCoral1"),
              _.myPond.emptyMainArray("StarCoral2"),
              r = 0;
            r < e;
            r++
          )
            j[r] && j.pop();
          for (r = 0; r < e; r++)
            (g = 1),
              r % 6 == 0
                ? ((c = new StarCoral(2)), (u = Object.create(m)))
                : r % 6 == 1
                  ? ((c = new StarCoral(2)), (u = Object.create(b)))
                  : r % 6 == 2
                    ? ((c = new StarCoral(1)), (u = Object.create(v)))
                    : r % 6 == 3
                      ? ((c = new StarCoral(2)), (u = Object.create(f)))
                      : r % 6 == 4
                        ? ((c = new StarCoral(1)), (u = Object.create(w)))
                        : ((c = new StarCoral(2)),
                          (u = Object.create(C)),
                          (g = 1.3)),
              (i = u.posX),
              (l = u.posY),
              5 < r &&
                (r < 120
                  ? r % 6 == 0
                    ? ((n = Math.ceil(r / 6)),
                      (s = Math.ceil(Math.sqrt(n))),
                      (p = 15 * s),
                      (h = 25 * s),
                      (d =
                        ((-(n - 1 - (s - 1) * (s - 1)) / (2 * s - 1.9995)) *
                          Math.PI *
                          9) /
                          16 +
                        Math.PI / 8),
                      (i += h * (Math.cos(d) + ((n % 11) - 3) / 15)),
                      (l -= p * Math.sin(d)))
                    : r % 6 == 1
                      ? ((n = Math.ceil(r / 6)),
                        (s = Math.ceil(Math.sqrt(n))),
                        (p = 20 * s),
                        (h = 35 * s),
                        (d =
                          (((n - 1 - (s - 1) * (s - 1)) / (2 * s - 2)) *
                            Math.PI *
                            1) /
                            2 +
                          Math.PI / 16),
                        (i += h * (Math.cos(d) + ((n % 7) - 3) / 9)),
                        (l += p * (Math.sin(d) + ((n % 11) - 3) / 15)))
                      : r % 6 == 2
                        ? ((n = Math.ceil(r / 6)),
                          (s = Math.ceil(Math.sqrt(n))),
                          (p = 12 * s),
                          (h = 17 * s),
                          (d =
                            (((n - 1 - (s - 1) * (s - 1)) / (2 * s - 2)) *
                              Math.PI *
                              7) /
                              12 -
                            Math.PI / 2),
                          (i += h * (Math.sin(d) + ((n % 11) - 2) / 15)),
                          (l -= p * Math.cos(d)))
                        : r % 6 == 3
                          ? ((n = Math.ceil(r / 6)),
                            (s = Math.ceil(Math.sqrt(n))),
                            (p = 12 * s),
                            (h = 35 * s),
                            (d =
                              (((n - 1 - (s - 1) * (s - 1)) / (2 * s - 2)) *
                                Math.PI *
                                5) /
                                8 -
                              Math.PI / 8),
                            (i += h * (Math.sin(d) + ((n % 11) - 2) / 15)),
                            (l -= p * (Math.cos(d) + ((n % 7) - 2) / 11)))
                          : r % 6 == 4
                            ? ((n = Math.ceil(r / 6)),
                              (s = Math.ceil(Math.sqrt(n))),
                              (p = 17 * s),
                              (h = 12 * s),
                              (d =
                                (((n - 1 - (s - 1) * (s - 1)) / (2 * s - 2)) *
                                  Math.PI) /
                                  3 +
                                Math.PI / 12),
                              (i -= h * Math.sin(d)),
                              (l += p * (Math.cos(d) + (5 - (n % 7)) / 15)))
                            : ((n = Math.ceil(r / 6)),
                              (s = Math.ceil(Math.sqrt(n))),
                              (p = 17 * s),
                              (h = 50 * s),
                              (d =
                                (((n - 1 - (s - 1) * (s - 1)) / (2 * s - 2)) *
                                  Math.PI) /
                                  2 +
                                Math.PI / 6),
                              (i -= h * Math.cos(d)),
                              (l -= p * (Math.sin(d) + ((n % 7) - 3) / 11)))
                  : ((s = r % 60),
                    (i =
                      j[r % 6].getPos().x +
                      0.85 * (j[r - 12].getPos().x - j[r % 6].getPos().x)),
                    (l =
                      j[r % 6].getPos().y +
                      0.85 * (j[r - 12].getPos().y - j[r % 6].getPos().y)),
                    (i /= 1.35),
                    (l /= 1.29))),
              (g = Math.pow(l / ce, 1.2)),
              (u.posX = 1.35 * globalResizeCalc(i)),
              (u.posY = 1.29 * globalResizeCalc(l)),
              (u.scale = u.scale * g * 1.65),
              c.reArrange(u),
              r % 6 == 0 || r % 6 == 1 || r % 6 == 3
                ? _.myPond.updateMainArray(
                    {
                      src: gizmoImageObj[M + ".png"],
                      pos: u,
                      type: "grass",
                      imgName: M,
                    },
                    "StarCoral2"
                  )
                : r % 6 == 2 || r % 6 == 4
                  ? _.myPond.updateMainArray(
                      {
                        src: gizmoImageObj[M + ".png"],
                        pos: u,
                        type: "grass",
                        imgName: M,
                      },
                      "StarCoral1"
                    )
                  : _.myPond.updateMainArray(
                      {
                        src: gizmoImageObj[M + ".png"],
                        pos: u,
                        type: "grass",
                        imgName: M,
                      },
                      "StarCoral2"
                    ),
              j.push(c),
              (u = c = null);
          let y = _.myPond.getPositionArray("StarCoral1").length - 1,
            S = _.myPond.getPositionArray("StarCoral2").length - 1,
            x = 0;
          (o = y + S),
            (a = Math.round(sa() * o)),
            (t = Math.round(oa() * o)),
            (s = o - a - t),
            0 == z && ((s = o), (t = a = 0));
          for (r = 0; r < s; r++)
            1 * j[r].getNumber() == 1
              ? ((x = y <= r ? r % y : r),
                _.myPond.updateMainArrayValue(
                  "StarCoral1",
                  x,
                  gizmoImageObj["starCoral1.png"]
                ))
              : 1 * j[r].getNumber() == 2 &&
                ((x = S <= r ? r % S : r),
                _.myPond.updateMainArrayValue(
                  "StarCoral2",
                  x,
                  gizmoImageObj["starCoral2.png"]
                ));
          for (r = s; r < s + a; r++)
            j[r] && 1 * j[r].getNumber() == 1
              ? ((x = y <= r ? r % y : r),
                _.myPond.updateMainArrayValue(
                  "StarCoral1",
                  x,
                  gizmoImageObj["starCoral1Bleached.png"]
                ))
              : j[r] &&
                1 * j[r].getNumber() == 2 &&
                ((x = S <= r ? r % S : r),
                _.myPond.updateMainArrayValue(
                  "StarCoral2",
                  x,
                  gizmoImageObj["starCoral2Bleached.png"]
                ));
          for (r = s + a; r < o; r++)
            j[r] && 1 * j[r].getNumber() == 1
              ? ((x = y <= r ? r % y : r),
                _.myPond.updateMainArrayValue(
                  "StarCoral1",
                  x,
                  gizmoImageObj["starCoral1Diseased.png"]
                ))
              : j[r] &&
                1 * j[r].getNumber() == 2 &&
                ((x = S <= r ? r % S : r),
                _.myPond.updateMainArrayValue(
                  "StarCoral2",
                  x,
                  gizmoImageObj["starCoral2Diseased.png"]
                ));
        })();
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
      _.myPond.emptyMainArray(e);
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
                    ((s = "lionfish"),
                    0.3 + 0.035 * (Math.random() - 0.5),
                    1.5),
          (a = (0.1 + 0.8 * Math.random()) * globalResizeCalc(685) * 1.2 - 60),
          (t =
            (0.2 + 0.55 * Math.random()) * globalResizeCalc(655) * 1.2 - 120),
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
            (t = (0.2 + 0.55 * Math.random()) * ce)),
          _.myPond.updateMainArray(
            {
              src: gizmoImageObj[s + ".png"],
              pos: i,
              type: "fish",
              imgName: s,
            },
            e
          );
      }
    }
    function ca(e) {
      // parrotfish animation
      let a, t, o, r;
      if (
        ((r = R.length - 1),
        (a = R[r]),
        (t = ae.parrotfish),
        (isNaN(a) || a < 0) && (a = 0),
        0 == a)
      );
      else {
        he[0] > ie[0] + 1 / da("parrotfish") &&
          ((he[0] = 0),
          (ie[0] = 3 * (0.5 - Math.random())),
          (h = (0.2 + 0.55 * Math.random()) * ce * 1.2 - 35),
          (o =
            0.3 +
            0.02 * (Math.random() - 0.5) +
            ((h / ce - 0.45) / 0.55) * 0.15),
          (l = ge + 50),
          0.5 < Math.random() && ((o = -o), (l = globalResizeCalc(-260))),
          (l = o < 0 ? globalResizeCalc(-150) : globalResizeCalc(685)),
          h < globalResizeCalc(100) && (h = globalResizeCalc(100)),
          h > globalResizeCalc(450) && (h = globalResizeCalc(450)),
          (i = {
            posX: l,
            posY: h,
            scaleX: o,
            scaleY: Math.abs(o),
            rotation: 10 * (Math.random() - 0.6),
          }),
          _.myPond.updateMainArray(
            {
              src: gizmoImageObj["parrotfish.png"],
              pos: i,
              type: "fish",
              isSelected: !1,
              imgName: "parrotfish",
            },
            "ParrotFish"
          )),
          _.myPond.disposeFish("ParrotFish");
        for (
          let s = _.myPond.getPositionArray("ParrotFish"), n = 0;
          n < s.length;
          n++
        ) {
          let i,
            l = (i = s[n].pos).posX,
            h = i.posY;
          if (0 <= i.scaleX) {
            (l -= Math.cos((i.rotation / 180) * Math.PI) * e * t),
              (h -= Math.sin((i.rotation / 180) * Math.PI) * e * t);
            let p = "left";
          } else {
            (l += Math.cos((i.rotation / 180) * Math.PI) * e * t),
              (h -= Math.sin((i.rotation / 180) * Math.PI) * e * t);
            p = "right";
          }
          "right" == p
            ? _.myPond.updateMainArrayValue(
                "ParrotFish",
                n,
                gizmoImageObj["parrotfish_r.png"],
                { posX: l, posY: h },
                p
              )
            : _.myPond.updateMainArrayValue(
                "ParrotFish",
                n,
                null,
                { posX: l, posY: h },
                p
              );
        }
      }
    }
    function ua(e) {
      // angelfish animation
      let a, t, o, r, s;
      if (
        ((s = B.length - 1),
        (a = B[s]),
        1,
        (t = ae.angelfish),
        (isNaN(a) || a < 0) && (a = 0),
        0 == a)
      );
      else {
        he[1] > ie[1] + 1 / da("angelfish") &&
          ((he[1] = 0),
          (ie[1] = 3 * (0.5 - Math.random())),
          (h = ge + 50),
          (p = (0.2 + 0.55 * Math.random()) * ce * 1.2 - 65),
          (r = o =
            0.3 +
            0.03 * (Math.random() - 0.5) +
            ((p / ce - 0.45) / 0.55) * 0.09),
          0.5 < Math.random() && ((o = -o), (h = -265)),
          (h = o < 0 ? globalResizeCalc(-150) : globalResizeCalc(685)),
          p < globalResizeCalc(100) && (p = globalResizeCalc(100)),
          p > globalResizeCalc(450) && (p = globalResizeCalc(450)),
          (l = {
            posX: h,
            posY: p,
            scaleX: o,
            scaleY: r,
            rotation: 6 * (Math.random() - 0.6),
          }),
          _.myPond.updateMainArray(
            {
              src: gizmoImageObj["angelfish.png"],
              pos: l,
              type: "fish",
              isSelected: !1,
              imgName: "angelfish",
            },
            "AngelFish"
          ));
        for (
          let n = _.myPond.getPositionArray("AngelFish"), i = 0;
          i < n.length;
          i++
        ) {
          let l,
            h = (l = n[i].pos).posX,
            p = l.posY;
          if (0 <= l.scaleX) {
            (h -= Math.cos((l.rotation / 180) * Math.PI) * e * t),
              (p -= Math.sin((l.rotation / 180) * Math.PI) * e * t);
            let d = "left";
          } else {
            (h += Math.cos((l.rotation / 180) * Math.PI) * e * t),
              (p -= Math.sin((l.rotation / 180) * Math.PI) * e * t);
            d = "right";
          }
          "right" == d
            ? _.myPond.updateMainArrayValue(
                "AngelFish",
                i,
                gizmoImageObj["angelfish_r.png"],
                { posX: h, posY: p },
                d
              )
            : _.myPond.updateMainArrayValue(
                "AngelFish",
                i,
                null,
                { posX: h, posY: p },
                d
              );
        }
        _.myPond.disposeFish("AngelFish");
      }
    }
    function ma(e) {
      // grouper animation
      let a, t, o, r, s;
      if (
        ((r = L.length - 1),
        (a = L[r]),
        c,
        3,
        (t = ae.grouper),
        (isNaN(a) || a < 0) && (a = 0),
        0 == a)
      );
      else {
        he[3] > ie[3] + 1 / da("grouper") &&
          ((he[3] = 0),
          (ie[3] = 3 * (0.5 - Math.random())),
          (h = ge + 50),
          (p = (0.2 + 0.55 * Math.random()) * ce * 1.22 - 70),
          (o =
            0.37 +
            0.05 * (Math.random() - 0.5) +
            ((p / ce - 0.45) / 0.55) * 0.17),
          0.66 <= (o *= 1.25) && (o = 0.55),
          (s = o),
          0.5 < Math.random() && ((o = -o), (h = -335)),
          (h = o < 0 ? globalResizeCalc(-200) : globalResizeCalc(685)),
          p < globalResizeCalc(100) && (p = globalResizeCalc(100)),
          p > globalResizeCalc(450) && (p = globalResizeCalc(450)),
          (l = {
            posX: h,
            posY: p,
            scaleX: o,
            scaleY: s,
            rotation: 6 * (Math.random() - 0.55),
          }),
          _.myPond.updateMainArray(
            {
              src: gizmoImageObj["grouper.png"],
              pos: l,
              type: "fish",
              isSelected: !1,
              imgName: "grouper",
            },
            "Grouper"
          ));
        for (
          let n = _.myPond.getPositionArray("Grouper"), i = 0;
          i < n.length;
          i++
        ) {
          let l,
            h = (l = n[i].pos).posX,
            p = l.posY;
          if (0 <= l.scaleX) {
            (h -= Math.cos((l.rotation / 180) * Math.PI) * e * t),
              (p -= Math.sin((l.rotation / 180) * Math.PI) * e * t);
            let d = "left";
          } else {
            (h += Math.cos((l.rotation / 180) * Math.PI) * e * t),
              (p -= Math.sin((l.rotation / 180) * Math.PI) * e * t);
            d = "right";
          }
          "right" == d
            ? _.myPond.updateMainArrayValue(
                "Grouper",
                i,
                gizmoImageObj["grouper_r.png"],
                { posX: h, posY: p },
                d
              )
            : _.myPond.updateMainArrayValue(
                "Grouper",
                i,
                null,
                { posX: h, posY: p },
                d
              );
        }
        _.myPond.disposeFish("Grouper");
      }
    }
    function ba(e) {
      // snapper animation
      let a, t, o, r, s;
      if (
        ((s = k.length - 1),
        (a = k[s]),
        u,
        4,
        (t = ae.snapper),
        (isNaN(a) || a < 0) && (a = 0),
        0 == a)
      );
      else {
        he[4] > ie[4] + 1 / da("snapper") &&
          ((he[4] = 0),
          (ie[4] = 3 * (0.5 - Math.random())),
          (h = ge + 50),
          (p = (0.2 + 0.55 * Math.random()) * ce * 1.2 - 35),
          (r = o =
            0.3 +
            0.03 * (Math.random() - 0.5) +
            ((p / ce - 0.45) / 0.55) * 0.09),
          0.5 < Math.random() && ((o = -o), (h = -285)),
          (h = o < 0 ? globalResizeCalc(-150) : globalResizeCalc(685)),
          p < globalResizeCalc(100) && (p = globalResizeCalc(100)),
          p > globalResizeCalc(450) && (p = globalResizeCalc(450)),
          (l = {
            posX: h,
            posY: p,
            scaleX: o,
            scaleY: r,
            rotation: 6 * (Math.random() - 0.55),
          }),
          _.myPond.updateMainArray(
            {
              src: gizmoImageObj["snapper.png"],
              pos: l,
              type: "fish",
              isSelected: !1,
              imgName: "snapper",
            },
            "Snapper"
          ));
        for (
          let n = _.myPond.getPositionArray("Snapper"), i = 0;
          i < n.length;
          i++
        ) {
          let l,
            h = (l = n[i].pos).posX,
            p = l.posY;
          if (0 <= l.scaleX) {
            (h -= Math.cos((l.rotation / 180) * Math.PI) * e * t),
              (p -= Math.sin((l.rotation / 180) * Math.PI) * e * t);
            let d = "left";
          } else {
            (h += Math.cos((l.rotation / 180) * Math.PI) * e * t),
              (p -= Math.sin((l.rotation / 180) * Math.PI) * e * t);
            d = "right";
          }
          "right" == d
            ? _.myPond.updateMainArrayValue(
                "Snapper",
                i,
                gizmoImageObj["snapper_r.png"],
                { posX: h, posY: p },
                d
              )
            : _.myPond.updateMainArrayValue(
                "Snapper",
                i,
                null,
                { posX: h, posY: p },
                d
              );
        }
        _.myPond.disposeFish("Snapper");
      }
    }
    function va(e) {
      // lionfish animation
      let a, t, o, r;
      if (
        ((r = D.length - 1),
        (a = D[r]),
        m,
        5,
        (t = ae.lionfish),
        (isNaN(a) || a < 0) && (a = 0),
        0 == a)
      );
      else {
        he[5] > ie[5] + 1 / da("lionfish") &&
          ((he[5] = 0),
          (ie[5] = 3 * (0.5 - Math.random())),
          (l = ge + 55),
          (h = (0.2 + 0.55 * Math.random()) * ce * 1.25 - 155),
          (o =
            0.3 +
            0.03 * (Math.random() - 0.5) +
            ((h / ce - 0.45) / 0.55) * 0.1),
          (o /= 1.5),
          (scaleY = o),
          0.5 < Math.random() && ((o = -o), (l = -370)),
          (l = o < 0 ? globalResizeCalc(-150) : globalResizeCalc(685)),
          h < globalResizeCalc(100) && (h = globalResizeCalc(100)),
          h > globalResizeCalc(450) && (h = globalResizeCalc(450)),
          (i = {
            posX: l,
            posY: h,
            scaleX: o,
            scaleY: scaleY,
            rotation: 6 * (Math.random() - 0.55),
          }),
          _.myPond.updateMainArray(
            {
              src: gizmoImageObj["lionfish.png"],
              pos: i,
              type: "fish",
              isSelected: !1,
              imgName: "lionfish",
            },
            "LionFish"
          ));
        for (
          let s = _.myPond.getPositionArray("LionFish"), n = 0;
          n < s.length;
          n++
        ) {
          let i,
            l = (i = s[n].pos).posX,
            h = i.posY;
          if (0 <= i.scaleX) {
            (l -= Math.cos((i.rotation / 180) * Math.PI) * e * t),
              (h -= Math.sin((i.rotation / 180) * Math.PI) * e * t);
            let p = "left";
          } else {
            (l += Math.cos((i.rotation / 180) * Math.PI) * e * t),
              (h -= Math.sin((i.rotation / 180) * Math.PI) * e * t);
            p = "right";
          }
          "right" == p
            ? _.myPond.updateMainArrayValue(
                "LionFish",
                n,
                gizmoImageObj["lionfish_r.png"],
                { posX: l, posY: h },
                p
              )
            : _.myPond.updateMainArrayValue(
                "LionFish",
                n,
                null,
                { posX: l, posY: h },
                p
              );
        }
        _.myPond.disposeFish("LionFish");
      }
    }
    function fa(e) {
      // turtle animation
      let a, t, o, r;
      if (
        ((r = T.length - 1),
        (a = T[r]),
        g,
        2,
        (t = ae.turtle),
        (isNaN(a) || a < 0) && (a = 0),
        0 == a)
      );
      else {
        he[2] > ie[2] + 1 / da("turtle") &&
          ((he[2] = 0),
          (ie[2] = 3 * (0.5 - Math.random())),
          (l = ge + 55),
          (h = (0.2 + 0.55 * Math.random()) * ce * 1.25 - 120),
          (o =
            0.39 +
            0.03 * (Math.random() - 0.5) +
            ((h / ce - 0.45) / 0.55) * 0.1),
          (o *= 2.5),
          (scaleY = o),
          0.5 < Math.random() && ((o = -o), (l = -255)),
          (l = o < 0 ? globalResizeCalc(-250) : globalResizeCalc(685)),
          h < globalResizeCalc(100) && (h = globalResizeCalc(100)),
          h > globalResizeCalc(450) && (h = globalResizeCalc(450)),
          (i = {
            posX: l,
            posY: h,
            scaleX: o,
            scaleY: scaleY,
            rotation: 6 * (Math.random() - 0.6),
            name: "turtle",
          }),
          _.myPond.updateMainArray(
            {
              src: gizmoImageObj["seaTurtle.png"],
              pos: i,
              type: "fish",
              isSelected: !1,
              imgName: "seaTurtle",
            },
            "SeaTurtle"
          ));
        for (
          let s = _.myPond.getPositionArray("SeaTurtle"), n = 0;
          n < s.length;
          n++
        ) {
          let i,
            l = (i = s[n].pos).posX,
            h = i.posY;
          if (0 <= i.scaleX) {
            (l -= Math.cos((i.rotation / 180) * Math.PI) * e * t),
              (h -= Math.sin((i.rotation / 180) * Math.PI) * e * t);
            let p = "left";
          } else {
            (l += Math.cos((i.rotation / 180) * Math.PI) * e * t),
              (h -= Math.sin((i.rotation / 180) * Math.PI) * e * t);
            p = "right";
          }
          "right" == p
            ? _.myPond.updateMainArrayValue(
                "SeaTurtle",
                n,
                gizmoImageObj["seaTurtle_r.png"],
                { posX: l, posY: h },
                p
              )
            : _.myPond.updateMainArrayValue(
                "SeaTurtle",
                n,
                null,
                { posX: l, posY: h },
                p
              );
        }
        _.myPond.disposeFish("SeaTurtle");
      }
    }
    (this.globalAnimationCallback = function (e) {
      let a, t;
      if (
        (0.1 < (t = ((a = new Date().getTime()) - pe) / 1e3) && (t = 0.1),
        (pe = a),
        !de)
      ) {
        for (let o = 0; o < 6; o++) he[o] += t;
        ca(t), ua(t), ma(t), ba(t), va(t), fa(t), _.myPond.drawCanvasFish();
      }
    }),
      enableConsole(!0);
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
          for (let s = 0; s < d.length; s++)
            t.push(o[s]), r.push(s), a.push("");
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
          for (let n = 13; n < 25; n++)
            h.push({ name: o[p], number: i[n] }), p++;
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
            (_e(),
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
            _.myPond.setSelectedSpecies(e.values.currentIdentity),
            _.myPond.drawCanvasGrass(),
            _.myPond.drawCanvasFish(),
            qe(),
            l.simulationInfo.setText("Year: " + z.toFixed(0)),
            De(),
            (wa = e.values.currentIdentity),
            Ae
              ? (l.mssgBox.hide(), _.xButton.hide())
              : (l.mssgBox.show(), _.xButton.show()),
            (ke = e.values.healthOfCoral)),
          getterSetter.isFromReset &&
            (l.mssgBox.show(), _.xButton.show(), (Ae = !1));
      }),
      (this.getCaption = function () {
        return "GizmoObject";
      });
  },
  gizmoImageObj = {};
function initializeGizmo(a) {
  let t = new CoralReef();
  $.ajaxSetup({ async: !1 }), $.ajaxSetup({ async: !0 });
  let o = [
      "algae1.png",
      "algae1_Shadow.png",
      "algae2.png",
      "algae2_Shadow.png",
      "angelfish.png",
      "angelfish_r.png",
      "angelfish_Shadow.png",
      "angelfish_Shadow_r.png",
      "grouper.png",
      "grouper_r.png",
      "grouper_Shadow.png",
      "grouper_Shadow_r.png",
      "lionfish.png",
      "lionfish_r.png",
      "lionfish_Shadow.png",
      "lionfish_Shadow_r.png",
      "oceanBackground.png",
      "oceanImage.png",
      "parrotfish.png",
      "parrotfish_r.png",
      "parrotfish_Shadow.png",
      "parrotfish_Shadow_r.png",
      "seaTurtle.png",
      "seaTurtle_r.png",
      "seaTurtle_Shadow.png",
      "seaTurtle_Shadow_r.png",
      "seaUrchin1.png",
      "seaUrchin1_Shadow.png",
      "seaUrchin2.png",
      "seaUrchin2_Shadow.png",
      "snapper.png",
      "snapper_r.png",
      "snapper_Shadow.png",
      "snapper_Shadow_r.png",
      "sponge1.png",
      "sponge1_Shadow.png",
      "sponge2.png",
      "sponge2_Shadow.png",
      "staghornCoral1.png",
      "staghornCoral1Bleached.png",
      "staghornCoral1Bleached_Shadow.png",
      "staghornCoral1Diseased.png",
      "staghornCoral1Diseased_Shadow.png",
      "staghornCoral1_Shadow.png",
      "staghornCoral2.png",
      "staghornCoral2Bleached.png",
      "staghornCoral2Bleached_Shadow.png",
      "staghornCoral2Diseased.png",
      "staghornCoral2Diseased_Shadow.png",
      "staghornCoral2_Shadow.png",
      "starCoral1.png",
      "starCoral1Bleached.png",
      "starCoral1Diseased.png",
      "starCoral1_Shadow.png",
      "starCoral2.png",
      "starCoral2Bleached.png",
      "starCoral2Diseased.png",
      "starfish1.png",
      "starfish1_Shadow.png",
      "starfish2.png",
      "starfish2_Shadow.png",
      "whiteBox.png",
      "xButton.png",
    ],
    r = {
      "algae1.png": { w: 63, h: 42 },
      "algae1_Shadow.png": { w: 63, h: 42 },
      "algae2.png": { w: 40, h: 36 },
      "algae2_Shadow.png": { w: 40, h: 36 },
      "angelfish.png": { w: 263, h: 125 },
      "angelfish_r.png": { w: 263, h: 125 },
      "angelfish_Shadow.png": { w: 263, h: 125 },
      "angelfish_Shadow_r.png": { w: 263, h: 125 },
      "grouper.png": { w: 335, h: 175 },
      "grouper_r.png": { w: 335, h: 175 },
      "grouper_Shadow.png": { w: 335, h: 175 },
      "grouper_Shadow_r.png": { w: 335, h: 175 },
      "lionfish.png": { w: 361, h: 309 },
      "lionfish_r.png": { w: 361, h: 309 },
      "lionfish_Shadow.png": { w: 361, h: 309 },
      "lionfish_Shadow_r.png": { w: 361, h: 309 },
      "oceanBackground.png": { w: 613, h: 600 },
      "oceanImage.png": { w: 885, h: 913 },
      "parrotfish.png": { w: 257, h: 93 },
      "parrotfish_r.png": { w: 257, h: 93 },
      "parrotfish_Shadow.png": { w: 257, h: 93 },
      "parrotfish_Shadow_r.png": { w: 257, h: 93 },
      "seaTurtle.png": { w: 2048, h: 2100 },
      "seaTurtle_r.png": { w: 2048, h: 2100 },
      "seaTurtle_Shadow.png": { w: 2048, h: 2100 },
      "seaTurtle_Shadow_r.png": { w: 2048, h: 2100 },
      "seaUrchin1.png": { w: 130, h: 137 },
      "seaUrchin1_Shadow.png": { w: 130, h: 137 },
      "seaUrchin2.png": { w: 125, h: 131 },
      "seaUrchin2_Shadow.png": { w: 125, h: 131 },
      "snapper.png": { w: 281, h: 100 },
      "snapper_r.png": { w: 281, h: 100 },
      "snapper_Shadow.png": { w: 281, h: 100 },
      "snapper_Shadow_r.png": { w: 281, h: 100 },
      "sponge1.png": { w: 157, h: 239 },
      "sponge1_Shadow.png": { w: 157, h: 239 },
      "sponge2.png": { w: 113, h: 132 },
      "sponge2_Shadow.png": { w: 113, h: 132 },
      "staghornCoral1.png": { w: 330, h: 210 },
      "staghornCoral1Bleached.png": { w: 330, h: 210 },
      "staghornCoral1Bleached_Shadow.png": { w: 330, h: 210 },
      "staghornCoral1Diseased.png": { w: 330, h: 210 },
      "staghornCoral1Diseased_Shadow.png": { w: 330, h: 210 },
      "staghornCoral1_Shadow.png": { w: 330, h: 210 },
      "staghornCoral2.png": { w: 269, h: 171 },
      "staghornCoral2Bleached.png": { w: 269, h: 171 },
      "staghornCoral2Bleached_Shadow.png": { w: 269, h: 171 },
      "staghornCoral2Diseased.png": { w: 269, h: 171 },
      "staghornCoral2Diseased_Shadow.png": { w: 269, h: 171 },
      "staghornCoral2_Shadow.png": { w: 269, h: 171 },
      "starCoral1.png": { w: 261, h: 207 },
      "starCoral1Bleached.png": { w: 261, h: 207 },
      "starCoral1Diseased.png": { w: 261, h: 207 },
      "starCoral1_Shadow.png": { w: 261, h: 207 },
      "starCoral2.png": { w: 213, h: 173 },
      "starCoral2Bleached.png": { w: 213, h: 173 },
      "starCoral2Diseased.png": { w: 213, h: 173 },
      "starfish1.png": { w: 169, h: 132 },
      "starfish1_Shadow.png": { w: 169, h: 132 },
      "starfish2.png": { w: 150, h: 102 },
      "starfish2_Shadow.png": { w: 150, h: 102 },
      "whiteBox.png": { w: 272, h: 530 },
      "xButton.png": { w: 50, h: 50 },
    },
    s = 0;
  !(function e() {
    gizmoImageObj[o[s]] = new Image();
    gizmoImageObj[o[s]].src = gConfig.paths.gImg + o[s];
    gizmoImageObj[o[s]].width = r[o[s]].w;
    gizmoImageObj[o[s]].height = r[o[s]].h;
    gizmoImageObj[o[s]].onload = function () {
      s < o.length - 1
        ? (s++, e())
        : ((s = 0), (gizmoInstance = t).init(), a && a());
    };
  })();
}
function fmtOutput(e, a) {
  let t,
    o,
    r = "",
    s = "",
    n = "";
  for (
    e < 0 && (s = "-"),
      n = (
        (e = Math.round(Math.abs(e) * Math.pow(10, a)) / Math.pow(10, a)) -
        (t = Math.round(e - 0.5))
      ).toFixed(a),
      0 == t && (r = "0");
    0 < t;

  )
    (o = t % 1e3),
      (r =
        (999 < t ? "," + (o < 100 ? (o < 10 ? "00" : "0") : "") : "") + o + r),
      (t = parseInt(t / 1e3));
  return (r = s + r), 0 < a && (r += n.substr(1, a + 1)), r;
}
let OceanBackground = function (e) {
    let a;
    function t(e) {
      "mousedown" == e.type || "touchstart" == e.type
        ? (a.trigger("blankLayerClicked"),
          "mousedown" == e.type &&
            $(document).unbind("mouseup", t).bind("mouseup", t))
        : ("mouseup" != e.type && "touchend" != e.type) ||
          $(document).unbind("mouseup", t);
    }
    (a = $("<div/>")).css({
      background:
        "url(" + gizmoImageObj["oceanBackground.png"].src + ") 0 0 no-repeat",
      "background-size":
        globalResizeCalc(690) + "px " + globalResizeCalc(675) + "px",
      position: "absolute",
      width: globalResizeCalc(690),
      height: globalResizeCalc(675),
      top: globalResizeCalc(3),
      left: globalResizeCalc(0),
      opacity: 0,
      filter: "alpha(opacity=0)",
      "z-index": 0,
    }),
      $(e).append(a),
      BrowserDetect.any()
        ? $(a).bind("touchstart", t).bind("touchend", t)
        : $(a).bind("mousedown", t),
      (this.setOpacity = function (e) {
        a.css({
          opacity: e,
          filter: "alpha(opacity=" + (100 * e).toFixed(0) + ")",
        });
      });
  },
  AlgaeClass = function (e, a) {
    let t, o;
    (t = 1),
      (o = 0),
      (this.reArrange = function (e) {
        t = e.scale;
      }),
      (this.bottomY = function () {
        return 500 + void 0 * t * 0.37 + NaN;
      }),
      (this.updateImageOrder = function (e) {
        o = e;
      }),
      (this.getIndex = function () {
        return o;
      });
  },
  AngelFish = function (e) {
    let a, t, o, r, s;
    (o = 0.35),
      (r = Math.abs(o)),
      (s = 0),
      (a = 300),
      (t = 200),
      (this.reArrange = function (e) {
        e.scaleX && (o = e.scaleX),
          e.scaleY && (r = e.scaleY),
          e.rotation && (s = e.rotation),
          (a = e.posX),
          (t = e.posY);
      }),
      (this.getParam = function () {
        return { posX: a, posY: t, scaleX: o, scaleY: r, rotation: s };
      }),
      (this.bottomY = function () {
        let e;
        return (
          (e = s < 0 ? 900 * -Math.sin((s / 180) * Math.PI) : 0),
          t + 125 * r + 65 + e
        );
      }),
      (this.updateImageOrder = function (e) {});
  },
  Grouper = function (e) {
    let a, t, o, r, s, n;
    (o = 0.35),
      (r = Math.abs(o)),
      (n = s = 0),
      (a = 200),
      (t = 300),
      (this.reArrange = function (e) {
        e.scaleX && (o = e.scaleX),
          e.scaleY && (r = e.scaleY),
          e.rotation && (s = e.rotation),
          (a = e.posX),
          (t = e.posY);
      }),
      (this.getParam = function () {
        return { posX: a, posY: t, scaleX: o, scaleY: r, rotation: s };
      }),
      (this.bottomY = function () {
        let e;
        return (
          (e = s < 0 ? 900 * -Math.sin((s / 180) * Math.PI) : 0),
          t + 125 * r + 65 + e
        );
      }),
      (this.updateImageOrder = function (e) {
        n = e;
      }),
      (this.getIndex = function () {
        return n;
      });
  },
  ParrotFish = function (e) {
    let a, t, o, r, s;
    (o = 0.35),
      (r = Math.abs(o)),
      (s = 0),
      (a = 500),
      (t = 350),
      (this.reArrange = function (e) {
        e.scaleX && (o = e.scaleX),
          e.scaleY && (r = e.scaleY),
          e.rotation && (s = e.rotation),
          (a = e.posX),
          (t = e.posY);
      }),
      (this.getParam = function () {
        return { posX: a, posY: t, scaleX: o, scaleY: r, rotation: s };
      }),
      (this.bottomY = function () {
        let e;
        return (
          (e = s < 0 ? 900 * -Math.sin((s / 180) * Math.PI) : 0),
          t + 125 * r + 65 + e
        );
      });
  },
  LionFish = function (e) {
    let a, t, o, r, s;
    (o = 0.35),
      (r = Math.abs(o)),
      (a = s = 0),
      (t = 150),
      (this.reArrange = function (e) {
        e.scaleX && (o = e.scaleX),
          e.scaleY && (r = e.scaleY),
          e.rotation && (s = e.rotation),
          (a = e.posX),
          (t = e.posY);
      }),
      (this.getParam = function () {
        return { posX: a, posY: t, scaleX: o, scaleY: r, rotation: s };
      }),
      (this.bottomY = function () {
        let e;
        return (
          (e = s < 0 ? 1e3 * -Math.sin((s / 180) * Math.PI) : 0),
          t + 309 * r + 120 + e
        );
      }),
      (this.updateImageOrder = function (e) {});
  },
  Snapper = function (e) {
    let a, t, o, r, s;
    (o = -0.35),
      (r = Math.abs(o)),
      (s = 0),
      (t = a = 100),
      (this.reArrange = function (e) {
        e.scaleX && (o = e.scaleX),
          e.scaleY && (r = e.scaleY),
          e.rotation && (s = e.rotation),
          (a = e.posX),
          (t = e.posY);
      }),
      (this.getParam = function () {
        return { posX: a, posY: t, scaleX: o, scaleY: r, rotation: s };
      }),
      (this.bottomY = function () {
        let e;
        return (
          (e = s < 0 ? 900 * -Math.sin((s / 180) * Math.PI) : 0),
          t + 100 * r + 65 + e
        );
      }),
      (this.updateImageOrder = function (e) {});
  },
  XButtonClass = function () {
    let t,
      o = { x: 0, y: 0, width: 19, height: 19 };
    function r(e) {
      ("mousedown" != e.type && "touchstart" != e.type) ||
        (t.trigger("xBtnClicked"), audioPlayerObj.playAudio("down"));
    }
    (this.init = function (e) {
      for (let a in e) o[a] = e[a];
      (t = $("<div/>")).css({
        background:
          "url(" + gizmoImageObj["xButton.png"].src + ") 0 0 no-repeat",
        "background-size":
          globalResizeCalc(o.width) + "px " + globalResizeCalc(o.height) + "px",
        position: "absolute",
        width: globalResizeCalc(o.width),
        height: globalResizeCalc(o.height),
        left: globalResizeCalc(o.x),
        top: globalResizeCalc(o.y),
        "z-index": o.index,
      }),
        t.css("cursor", "pointer"),
        o.target.append(t),
        t.attr({ p_title: "Click to close text box." }),
        BrowserDetect.any()
          ? $(t).bind("touchstart", r).bind("touchend", r)
          : $(t).bind("mousedown", r);
    }),
      (this.show = function () {
        t.show();
      }),
      (this.hide = function () {
        t.hide();
      });
  },
  SeaTurtle = function (e) {
    let a, t, o, r, s;
    (o = 0.9),
      (r = Math.abs(o)),
      (s = 0),
      (t = 320),
      (this.reArrange = function (e) {
        e.scaleX && (o = e.scaleX),
          e.scaleY && (r = e.scaleY),
          e.rotation && (s = e.rotation),
          (a = e.posX),
          (t = e.posY);
      }),
      (this.getParam = function () {
        return { posX: a, posY: t, scaleX: o, scaleY: r, rotation: s };
      }),
      (this.bottomY = function () {
        let e;
        return (
          (e = s < 0 ? 900 * -Math.sin((s / 180) * Math.PI) : 0),
          t + 125 * r + 65 + e
        );
      }),
      (this.updateImageOrder = function (e) {});
  },
  SeaUrchin = function (e, a) {
    let t, o, r, s;
    1 == e ? (130, (t = 137)) : (125, (t = 131)),
      (o = 0.3),
      (s = 0),
      (r = 520),
      (this.reArrange = function (e) {
        e.scale && (o = e.scale), (r = e.posY);
      }),
      (this.bottomY = function () {
        return r + t * (0.5 + o / 2);
      }),
      (this.updateImageOrder = function (e) {
        s = e;
      }),
      (this.getIndex = function () {
        return s;
      });
  },
  SpongeClass = function (e, a) {
    let t, o, r, s;
    1 == e ? (157, (t = 239)) : (113, (t = 132)),
      (r = 450),
      (s = 0),
      (o = 1),
      (this.reArrange = function (e) {
        (o = e.scale), (r = e.posY);
      }),
      (this.bottomY = function () {
        return r + t * (0.5 + o / 2);
      }),
      (this.updateImageOrder = function (e) {
        s = e;
      }),
      (this.getIndex = function () {
        return s;
      });
  },
  StarfishClass = function (e, a) {
    let t, o, r, s;
    1 == e ? (169, (t = 132)) : (150, (t = 102)),
      (o = 450),
      (r = 0.5),
      (this.reArrange = function (e) {
        (r = e.scale), (o = e.posY);
      }),
      (this.bottomY = function () {
        return o + t * (0.5 + r / 2);
      }),
      (this.updateImageOrder = function (e) {
        s = e;
      }),
      (this.getIndex = function () {
        return s;
      });
  },
  StaghornCoral = function (e, a) {
    let t,
      o,
      r,
      s,
      n,
      i = e;
    1 == e ? (330, (t = 210)) : (269, (t = 171)),
      (o = 10),
      (r = 455),
      (n = 0),
      (s = 0.65),
      (this.getNumber = function () {
        return i;
      }),
      (this.getPos = function () {
        return { x: o, y: r };
      }),
      (this.reArrange = function (e) {
        (s = e.scale), (o = e.posX), (r = e.posY);
      }),
      (this.bottomY = function () {
        return r + t * (0.5 + s / 2);
      }),
      (this.updateImageOrder = function (e) {
        n = e;
      }),
      (this.getIndex = function () {
        return n;
      });
  },
  StarCoral = function (e, a) {
    let t,
      o,
      r,
      s,
      n,
      i = e;
    (o = 455),
      (r = 307),
      (s = 0.25),
      (n = 0),
      1 == e ? (261, (t = 207)) : (213, (t = 173)),
      (this.getNumber = function () {
        return i;
      }),
      (this.getPos = function () {
        return { x: o, y: r };
      }),
      (this.reArrange = function (e) {
        (s = e.scale), (o = e.posX), (r = e.posY);
      }),
      (this.bottomY = function () {
        return r + t * (0.5 + s / 2);
      }),
      (this.updateImageOrder = function (e) {
        n = e;
      }),
      (this.getIndex = function () {
        return n;
      });
  },
  PondClass = function () {
    let o,
      u = {
        width: 50,
        height: 50,
        ctxBelow: null,
        ctxMiddle: null,
        ctxMiddleShadow: null,
        ctxAbove: null,
        canvasBelow: null,
        canvasMiddle: null,
        canvasMiddleShadow: null,
        canvasAbove: null,
        x: 10,
        y: 10,
        imageArr: [
          "algae1.png",
          "algae2.png",
          "angelfish.png",
          "grouper.png",
          "lionfish.png",
          "parrotfish.png",
          "seaUrchin1.png",
          "seaUrchin2.png",
          "snapper.png",
          "sponge1.png",
          "sponge2.png",
          "staghornCoral1.png",
          "staghornCoral1Bleached.png",
          "staghornCoral1Diseased.png",
          "staghornCoral2.png",
          "staghornCoral2Bleached.png",
          "staghornCoral2Diseased.png",
          "starCoral1.png",
          "starCoral1Bleached.png",
          "starCoral1Diseased.png",
          "starCoral2.png",
          "starCoral2Bleached.png",
          "starCoral2Diseased.png",
          "starfish1.png",
          "starfish2.png",
          "seaTurtle.png",
          "angelfish_r.png",
          "grouper_r.png",
          "lionfish_r.png",
          "parrotfish_r.png",
          "snapper_r.png",
          "seaTurtle_r.png",
        ],
        mainObj: {
          Algae: [],
          AngelFish: [],
          Grouper: [],
          ParrotFish: [],
          LionFish: [],
          Snapper: [],
          SeaTurtle: [],
          SeaUrchin: [],
          Sponge: [],
          Starfish: [],
          StaghornCoral1: [],
          StaghornCoral2: [],
          StarCoral1: [],
          StarCoral2: [],
        },
        turtleSprite: [],
      },
      r = this;
    this.init = function (e) {
      for (let a in e) u[a] = e[a];
      (u.width = globalResizeCalc(u.width)),
        (u.height = globalResizeCalc(u.height)),
        (u.left = globalResizeCalc(u.left)),
        (u.top = globalResizeCalc(u.top)),
        (function () {
          (u.canvasBelow = document.createElement("canvas")),
            (u.ctxBelow = u.canvasBelow.getContext("2d")),
            u.canvasBelow.setAttribute("id", u.id + "_Below"),
            (u.canvasBelow.width = u.width),
            (u.canvasBelow.height = u.height),
            u.target &&
              ($(u.canvasBelow)
                .css({
                  position: "absolute",
                  "z-index": 2,
                  left: u.x,
                  top: u.y,
                })
                .addClass("Below"),
              u.target.append(u.canvasBelow));
          (u.canvasMiddleShadow = document.createElement("canvas")),
            (u.ctxMiddleShadow = u.canvasMiddleShadow.getContext("2d")),
            u.canvasMiddleShadow.setAttribute("id", u.id + "_Middle"),
            (u.canvasMiddleShadow.width = u.width),
            (u.canvasMiddleShadow.height = u.height),
            u.target &&
              ($(u.canvasMiddleShadow)
                .css({
                  position: "absolute",
                  "z-index": 3,
                  left: u.x,
                  top: u.y,
                })
                .addClass("Middle"),
              u.target.append(u.canvasMiddleShadow));
          (u.canvasMiddle = document.createElement("canvas")),
            (u.ctxMiddle = u.canvasMiddle.getContext("2d")),
            u.canvasMiddle.setAttribute("id", u.id + "_Middle"),
            (u.canvasMiddle.width = u.width),
            (u.canvasMiddle.height = u.height),
            u.target &&
              ($(u.canvasMiddle)
                .css({
                  position: "absolute",
                  "z-index": 3,
                  left: u.x,
                  top: u.y,
                })
                .addClass("Middle"),
              u.target.append(u.canvasMiddle));
          (u.canvasAbove = document.createElement("canvas")),
            (u.ctxAbove = u.canvasAbove.getContext("2d")),
            u.canvasAbove.setAttribute("id", u.id + "_Above"),
            (u.canvasAbove.width = u.width),
            (u.canvasAbove.height = u.height),
            u.target &&
              ($(u.canvasAbove)
                .css({
                  position: "absolute",
                  "z-index": 4,
                  left: u.x,
                  top: u.y,
                })
                .addClass("Above"),
              u.target.append(u.canvasAbove));
        })();
      let t = gConfig.paths.gRoot + "js/seaTurtle.json";
      $.ajaxSetup({ async: !1 }),
        $.getJSON(t, function (e) {
          (o = e.frames),
            $.each(o, function (e, a) {
              u.turtleSprite.push({
                x: a.frame.x,
                y: (e % 16) * 130,
                w: a.frame.w,
                h: a.frame.h,
              });
            });
        }),
        $.ajaxSetup({ async: !0 }),
        (function () {
          for (let e, a, t = new Image(), o = 0; o < u.imageArr.length; o++)
            (a = e = null),
              (e = document.createElement("canvas")),
              (a = e.getContext("2d")),
              (t.src = gizmoImageObj[u.imageArr[o]].src),
              (t.width = globalResizeCalc(gizmoImageObj[u.imageArr[o]].width)),
              (t.height = globalResizeCalc(
                gizmoImageObj[u.imageArr[o]].height
              )),
              (e.width = t.width),
              (e.height = t.height),
              "seaTurtle.png" == u.imageArr[o] ||
              "seaTurtle_r.png" == u.imageArr[o]
                ? ((t.width = globalResizeCalc(u.turtleSprite[0].w)),
                  (t.height = globalResizeCalc(u.turtleSprite[0].h)),
                  (e.width = t.width),
                  (e.height = t.height),
                  "seaTurtle_r.png" == u.imageArr[o]
                    ? a.drawImage(
                        t,
                        1810 - u.turtleSprite[0].x,
                        u.turtleSprite[0].y,
                        u.turtleSprite[0].w - 2,
                        u.turtleSprite[0].h,
                        0,
                        0,
                        t.width,
                        t.height
                      )
                    : a.drawImage(
                        t,
                        u.turtleSprite[0].x,
                        u.turtleSprite[0].y,
                        u.turtleSprite[0].w,
                        u.turtleSprite[0].h,
                        0,
                        0,
                        t.width,
                        t.height
                      ))
                : a.drawImage(t, 0, 0, t.width, t.height),
              (p[u.imageArr[o].split(".png")[0]] = { canvas: e, context: a });
        })();
    };
    let p = {};
    function s(e) {
      let a, t, o, r, s, n;
      if (
        ((a = e),
        (t = u.ctxBelow.getImageData(a.x, a.y, 1, 1).data),
        (o = u.ctxMiddle.getImageData(a.x, a.y, 1, 1).data),
        (r = u.ctxAbove.getImageData(a.x, a.y, 1, 1).data),
        (s = "#" + ("000000" + g(t[0], t[1], t[2])).slice(-6)),
        (n = "#" + ("000000" + g(o[0], o[1], o[2])).slice(-6)),
        "#" + ("000000" + g(r[0], r[1], r[2])).slice(-6) == "#000000" &&
          "#000000" == n &&
          "#000000" == s)
      )
        return !1;
      for (let i = m.length - 1; 0 <= i; i--)
        if (
          m[i].x <= e.x &&
          m[i].x + m[i].width >= e.x &&
          m[i].y <= e.y &&
          m[i].y + m[i].height >= e.y &&
          1 == m[i].zIndex
        ) {
          let l = e.x - m[i].x,
            h = e.y - m[i].y;
          if (d(m[i], l, h)) return { Arr: m[i], type: "grass" };
        }
      for (i = c.length - 1; 0 <= i; i--)
        if (
          c[i].x <= e.x &&
          c[i].x + c[i].width >= e.x &&
          c[i].y <= e.y &&
          c[i].y + c[i].height >= e.y
        ) {
          (l = e.x - c[i].x), (h = e.y - c[i].y);
          if (d(c[i], l, h)) return { Arr: c[i], type: "fish" };
        }
      for (i = m.length - 1; 0 <= i; i--)
        if (
          m[i].x <= e.x &&
          m[i].x + m[i].width >= e.x &&
          m[i].y <= e.y &&
          m[i].y + m[i].height >= e.y &&
          0 == m[i].zIndex
        ) {
          (l = e.x - m[i].x), (h = e.y - m[i].y);
          if (d(m[i], l, h)) return { Arr: m[i], type: "grass" };
        }
    }
    function d(e, a, t) {
      let o = p[e.imgName].canvas,
        r = p[e.imgName].context,
        s = o.width / e.width,
        n = o.height / e.height,
        i = Math.round(a * s),
        l = Math.round(t * n),
        h = r.getImageData(i, l, 1, 1).data;
      return "#000000" != "#" + ("000000" + g(h[0], h[1], h[2])).slice(-6);
    }
    function g(e, a, t) {
      return ((e << 16) | (a << 8) | t).toString(16);
    }
    (this.addEventListener = function (e, a) {
      u[e] = a;
    }),
      (this.mouseEvent = function (e) {
        let a;
        if (
          ($("#canvas_touchPad").css({ cursor: "default" }),
          "mousedown" == e.type)
        ) {
          for (let t in ((a = s(e)), u.mainObj))
            for (let o in u.mainObj[t]) u.mainObj[t][o].isSelected = !1;
          a
            ? ((u.mainObj[a.Arr.arrayIndex.mainIndex][
                a.Arr.arrayIndex.positionIndex
              ].isSelected = !0),
              u.oceanAnimalSelected(
                "oceanAnimalSelected",
                a.Arr.arrayIndex.mainIndex
              ),
              "fish" == a.type ? r.drawCanvasFish() : r.drawCanvasGrass())
            : u.blankLayerClicked("blankLayerClicked");
        } else
          "mousemove" == e.type
            ? (a = s(e))
              ? $("#canvas_touchPad").css({ cursor: "pointer" })
              : $("#canvas_touchPad").css({ cursor: "default" })
            : "mouseup" == e.typr &&
              $("#canvas_touchPad").css({ cursor: "default" });
      }),
      (this.update = function (e) {
        for (let a in e) u[a] = e[a];
      }),
      (this.disposeFish = function (e) {
        if (u.mainObj[e])
          for (let a in u.mainObj[e])
            (u.mainObj[e][a].pos.posX + u.mainObj[e][a].src.width <=
              globalResizeCalc(-200) ||
              u.mainObj[e][a].pos.posX >=
                u.canvasMiddle.width + globalResizeCalc(200)) &&
              u.mainObj[e].splice(a, 1);
      }),
      (this.getPositionArray = function (e, a) {
        return u.mainObj[e];
      }),
      (this.updateMainArrayValue = function (e, a, t, o, r) {
        t && u.mainObj[e][a] && (u.mainObj[e][a].src = t),
          o &&
            u.mainObj[e][a] &&
            ((u.mainObj[e][a].pos.posX = o.posX),
            (u.mainObj[e][a].pos.posY = o.posY),
            (u.mainObj[e][a].direction = r));
      }),
      (this.emptyMainArray = function (e) {
        u.mainObj[e] = [];
      }),
      (this.updateMainArray = function (e, a) {
        u.mainObj[a].push(e);
      });
    let m = new Array();
    (this.drawCanvasGrass = function () {
      (m = []),
        (u.canvasBelow.width = u.canvasBelow.width),
        (u.canvasAbove.width = u.canvasAbove.width),
        u.ctxMiddleShadow.clearRect(
          0,
          0,
          u.canvasMiddleShadow.width,
          u.canvasMiddleShadow.height
        );
      let e = new Image(),
        a = [];
      for (let t in u.mainObj)
        for (let o in u.mainObj[t])
          if ("grass" == u.mainObj[t][o].type) {
            let r = u.mainObj[t][o];
            (r.arrayIndex = { mainIndex: t, positionIndex: o }), a.push(r);
          }
      let s,
        n,
        i,
        l,
        h = (function (e) {
          let a;
          e = e.slice(0);
          for (let t = 0; t < e.length; t++)
            for (let o = 0; o < e.length; o++)
              if (
                (globalResizeCalc(e[t].src.height),
                Math.abs(e[t].pos.scale),
                (a = e[t].pos.posY + globalResizeCalc(e[t].src.height) / 2),
                globalResizeCalc(e[o].src.height),
                Math.abs(e[o].pos.scale),
                e[o].pos.posY + globalResizeCalc(e[o].src.height) / 2 < a)
              ) {
                let r = e[t];
                (e[t] = e[o]), (e[o] = r);
              }
          return e;
        })(a);
      for (let o in h) {
        let p = 0;
        if (
          ((e.src = h[o].src.src),
          (e.width =
            globalResizeCalc(h[o].src.width) * Math.abs(h[o].pos.scale)),
          (e.height =
            globalResizeCalc(h[o].src.height) * Math.abs(h[o].pos.scale)),
          (s = h[o].pos.posX + globalResizeCalc(h[o].src.width) / 2),
          (n = h[o].pos.posY + globalResizeCalc(h[o].src.height) / 2),
          (i = s - e.width / 2),
          (l = n - e.height / 2),
          h[o].isSelected)
        ) {
          let d = new Image();
          "Starfish" == h[o].arrayIndex.mainIndex
            ? (d.src = gizmoImageObj[h[o].imgName + "_Shadow.png"].src)
            : (d.src = gizmoImageObj[f(h[o].arrayIndex.mainIndex)].src);
          let g = i + globalResizeCalc(10) * Math.abs(h[o].pos.scale),
            c = l + globalResizeCalc(10) * Math.abs(h[o].pos.scale);
          u.ctxBelow.drawImage(d, g, c, e.width, e.height);
        }
        "Algae" == h[o].pos.name || "SeaUrchin" == h[o].pos.name
          ? u.ctxBelow.drawImage(e, i, l, e.width, e.height)
          : Math.abs(h[o].pos.scale) <= 0.4
            ? i < globalResizeCalc(70) && 0.6 < Math.abs(h[o].pos.scale)
              ? ((p = 1), u.ctxAbove.drawImage(e, i, l, e.width, e.height))
              : u.ctxBelow.drawImage(e, i, l, e.width, e.height)
            : ((p = 1), u.ctxAbove.drawImage(e, i, l, e.width, e.height)),
          m.push({
            imgName: h[o].imgName,
            x: i,
            y: l,
            width: e.width,
            height: e.height,
            arrayIndex: h[o].arrayIndex,
            zIndex: p,
          });
      }
    }),
      (this.getSelectedSpecies = function () {
        for (let e in u.mainObj)
          for (let a in u.mainObj[e])
            if (u.mainObj[e][a].isSelected) return u.mainObj[e][a].arrayIndex;
      }),
      (this.setSelectedSpecies = function (e) {
        e &&
          ((u.mainObj[e.mainIndex][1 * e.positionIndex].isSelected = !0),
          u.oceanAnimalSelected("oceanAnimalSelected", e.mainIndex));
      });
    let c = new Array(),
      b = new Image(),
      v = 0;
    function f(e) {
      switch (e) {
        case "Algae":
        case "Algae":
          return "algae1_Shadow.png";
        case "AngelFish":
          return "angelfish_Shadow.png";
        case "Grouper":
          return "grouper_Shadow.png";
        case "ParrotFish":
          return "parrotfish_Shadow.png";
        case "LionFish":
          return "lionfish_Shadow.png";
        case "Snapper":
          return "snapper_Shadow.png";
        case "SeaTurtle":
          return "seaTurtle_Shadow.png";
        case "SeaTurtle_r":
          return "seaTurtle_Shadow_r.png";
        case "SeaUrchin":
          return "seaUrchin1_Shadow.png";
        case "Sponge":
          return "sponge1_Shadow.png";
        case "Starfish":
          return "Starfish_Shadow.png";
        case "StaghornCoral1":
          return "staghornCoral1_Shadow.png";
        case "StaghornCoral2":
          return "staghornCoral2_Shadow.png";
        case "StarCoral1":
        case "StarCoral2":
          return "starCoral1_Shadow.png";
      }
    }
    this.drawCanvasFish = function () {
      (c = []),
        u.ctxMiddle.clearRect(
          0,
          0,
          u.canvasMiddle.width,
          u.canvasMiddle.height
        ),
        u.ctxMiddleShadow.clearRect(
          0,
          0,
          u.canvasMiddle.width,
          u.canvasMiddle.height
        );
      let e,
        a,
        t,
        o,
        r = [];
      for (let s in u.mainObj)
        for (let n in u.mainObj[s])
          if ("fish" == u.mainObj[s][n].type) {
            let i = u.mainObj[s][n];
            (i.arrayIndex = { mainIndex: s, positionIndex: n }), r.push(i);
          }
      for (let n in r) {
        if (
          ((b.src = r[n].src.src),
          "turtle" == r[n].pos.name
            ? ((v = v >= u.turtleSprite.length ? (v = 0) : v),
              (b.width =
                globalResizeCalc(u.turtleSprite[v].w) *
                Math.abs(r[n].pos.scaleX)),
              (b.height =
                globalResizeCalc(u.turtleSprite[v].h) *
                Math.abs(r[n].pos.scaleY)),
              (e = r[n].pos.posX + globalResizeCalc(u.turtleSprite[v].w) / 2),
              (a = r[n].pos.posY + globalResizeCalc(u.turtleSprite[v].h) / 2))
            : ((b.width =
                globalResizeCalc(r[n].src.width) * Math.abs(r[n].pos.scaleX)),
              (b.height =
                globalResizeCalc(r[n].src.height) * Math.abs(r[n].pos.scaleY)),
              (e = r[n].pos.posX + globalResizeCalc(r[n].src.width) / 2),
              (a = r[n].pos.posY + globalResizeCalc(r[n].src.height) / 2)),
          (t = e - b.width / 2),
          (o = a - b.height / 2),
          "turtle" == r[n].pos.name)
        )
          var l =
            "right" == r[n].direction
              ? 1811 - u.turtleSprite[v].x
              : u.turtleSprite[v].x;
        let h = r[n].imgName;
        "right" == r[n].direction && (h += "_r"),
          "turtle" == r[n].pos.name
            ? (r[n].isSelected &&
                ((w.src = gizmoImageObj[f(r[n].arrayIndex.mainIndex)].src),
                "right" == r[n].direction &&
                  (w.src =
                    gizmoImageObj[f(r[n].arrayIndex.mainIndex + "_r")].src),
                u.ctxMiddle.drawImage(
                  w,
                  l + 0.5,
                  u.turtleSprite[v].y,
                  u.turtleSprite[v].w - 3.5,
                  u.turtleSprite[v].h,
                  t - globalResizeCalc(10),
                  o + globalResizeCalc(10),
                  globalResizeCalc(u.turtleSprite[v].w),
                  globalResizeCalc(u.turtleSprite[v].h)
                )),
              u.ctxMiddle.drawImage(
                b,
                l,
                u.turtleSprite[v].y,
                u.turtleSprite[v].w - 2.5,
                u.turtleSprite[v].h + 2,
                t,
                o,
                globalResizeCalc(u.turtleSprite[v].w),
                globalResizeCalc(u.turtleSprite[v].h)
              ),
              c.push({
                imgName: h,
                x: t,
                y: o,
                width: globalResizeCalc(u.turtleSprite[v].w),
                height: globalResizeCalc(u.turtleSprite[v].h),
                arrayIndex: r[n].arrayIndex,
                direction: r[n].direction,
              }),
              (v += 1))
            : (r[n].isSelected &&
                C(
                  b,
                  t,
                  o,
                  b.width,
                  b.height,
                  r[n].direction,
                  r[n].pos.rotation,
                  r[n].arrayIndex.mainIndex
                ),
              u.ctxMiddle.drawImage(b, t, o, b.width, b.height),
              c.push({
                imgName: h,
                x: t,
                y: o,
                width: b.width,
                height: b.height,
                arrayIndex: r[n].arrayIndex,
              }));
      }
    };
    let w = new Image();
    function C(e, a, t, o, r, s, n, i) {
      (w.src = gizmoImageObj[f(i)].src), u.ctxMiddleShadow.save();
      let l = globalResizeCalc(5),
        h = globalResizeCalc(5);
      "right" == s &&
        (u.ctxMiddleShadow.translate(a + o / 2, t + r / 2),
        u.ctxMiddleShadow.scale(-1, 1),
        u.ctxMiddleShadow.translate(-(a + o / 2), -(t + r / 2))),
        u.ctxMiddleShadow.translate(a + o / 2, t + r / 2),
        u.ctxMiddleShadow.rotate((Math.PI / 180) * n),
        u.ctxMiddleShadow.translate(-(a + o / 2), -(t + r / 2)),
        u.ctxMiddleShadow.drawImage(w, a + l, t + h, o, r),
        u.ctxMiddleShadow.restore();
    }
  };
