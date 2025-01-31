let ne = []; // csv takes from these raw values
let te = []; // holds all species numbers; te = { algae sponge staghorn star urchin parrot angel turtle grouper snapper lion thorns
let i = []; // store plot data and text field data from var l
let O,
  Y,
  F,
  I,
  R,
  B,
  k,
  L,
  X,
  T,
  D,
  N,
  h,
  E,
  w,
  f = [];
let z = 0;

let l = {
  tabComp1: {},
  tabComp2: {},
  touchPad: {},
  conditions: {},
  resetBtn: {},
  advanceBtn: {},
  restartBtn: {},
  exprtBtn: {},
  controlBtn: {},
  cameraIcon1: {},
  cameraIcon2: {},
  graphCntrl1: {},
  checkBox1: {},
  checkBox2: {},
  sliderComp1: {},
  sliderComp2: {},
  sliderComp3: {},
  sliderComp4: {},
  sliderComp5: {},
  sliderComp6: {},
  sliderComp7: {},
  sliderComp8: {},
  sliderComp9: {},
  sliderComp10: {},
  sliderComp11: {},
  sliderComp12: {},
  tField1: {},
  tField2: {},
  tField3: {},
  tField4: {},
  tField5: {},
  tField6: {},
  tField7: {},
  tField8: {},
  tField9: {},
  tField10: {},
  tField11: {},
  tField12: {},
  plotStaghorn: {},
  plotStarCoral: {},
  plotSponge: {},
  plotAlgae: {},
  plotPrrtfish: {},
  plotAngelfish: {},
  plotSnapper: {},
  plotGrouper: {},
  plotUrchin: {},
  plotTurtle: {},
  plotLionfish: {},
  plotThorns: {},
  graph1: {},
  graphXLabel: {},
  graphYLabel: {},
  summaryMssg: {},
};

function currentArrVal() {
  // Ge()
  // calculations 2
  var e, a;
  (te = new Object()),
    (e = 2.1 * sediment1() * (0.5 + 0.5 * sediment2())),
    (a = 0.001),
    (te.algae = new Array(e, a, 0, 0)),
    (e = 0.3 * (0.8 + 0.25 * sediment1() - sediment3())),
    (a = 0.002),
    (te.sponge = new Array(e, a, 0, 0)),
    (e =
      0.3 *
      (1 - coralStress()) *
      waterTemp() *
      phEffect() *
      sediment2() *
      (1 - 0.5 * sediment3())),
    (a = 0.002),
    (te.staghorn = new Array(e, a, 0, 0)),
    (e =
      0.07 *
      (1 - coralStress() / 2) *
      waterTemp() *
      phEffect() *
      sediment2() *
      (1 - 0.5 * sediment3())),
    (a = 8e-4),
    (te.star = new Array(e, a, 0, 0)),
    (te.urchin = new Array(0, 0, 5e-4, 0.2)),
    (te.parrot = new Array(0, 0.0015, 0.001, 0.094 + iVal6() / 100)),
    (te.angel = new Array(0, 0.0011, 0.0014, 0.02 + (0.71 * iVal6()) / 100)),
    (te.turtle = new Array(0, 0, 4e-4, 0.025 + (0.45 * iVal6()) / 100)),
    (te.grouper = new Array(
      0,
      0.002,
      4e-4,
      0.12 + (iVal6() + 1.6 * i[7].obj.getValue()) / 100 / 8
    )),
    (te.snapper = new Array(
      0,
      0.002,
      49e-5,
      0.0542 + (iVal6() + 0.9 * i[8].obj.getValue()) / 100 / 3
    )),
    (te.lion = new Array(0, 0, 0.0015, 0.1 + iVal6() / 100 / 3)),
    (te.thorns = new Array(0, 0, 0.011 * sediment1(), 0.1));
}

function sediment1() {
  // Je()
  // calculations
  return (
    (0.2 * i[3].obj.getValue() +
      0.4 * i[5].obj.getValue() +
      0.3 * i[4].obj.getValue()) /
      100 +
    0.1
  );
}

function sediment2() {
  // Ke()
  //  calc
  return (
    1 -
    (0.5 * sediment3() + 0.4 * sediment1() + (0.1 * i[0].obj.getValue()) / 100)
  );
}

function sediment3() {
  // He()
  // calculations
  return (
    (0.6 * i[3].obj.getValue() +
      0.3 * i[5].obj.getValue() +
      0.05 * i[4].obj.getValue() +
      0.05 * i[0].obj.getValue()) /
    100
  );
}

function coralStress() {
  // ea()
  // calc
  return (
    (sediment3() +
      sediment1() +
      s / 100 +
      iVal6() / 100 +
      3 * (1 - waterTemp()) +
      3 * (1 - phEffect())) /
    10
  );
}

function waterTemp() {
  // We
  // array of water temp effect on organism ?
  return [
    0.08, 0.13, 0.21, 0.32, 0.46, 0.6, 0.75, 0.88, 0.97, 1, 0.97, 0.88, 0.75,
    0.6, 0.46, 0.32, 0.21, 0.13, 0.08,
  ][Math.round(i[1].obj.getValue() - 18)];
}

function phEffect() {
  // Qe
  // calculations based on ph
  var e, a;
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

function iVal6() {
  // aa
  return Number(i[6].obj.getValue());
}

function Pe(e) {
  // ***run all functions upon each year update
  var a, t, o, r, s;
  z++, // advance current year but idk where it is defined
    // l.simulationInfo.setText("Year: " + z.toFixed(0)),
    currentArrVal(),
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
    (a = h[o]), // takes last entry in h
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
    (t = a + s[2] * a * h[o] - s[3] * a - (y[o] + S[o] + 5 * x[o]) * a * s[1]),
    w.push(1 * t.toFixed(4)),
    (s = te.angel),
    (a = C[o]),
    (t = a + s[2] * a * p[o] - s[3] * a - (y[o] + S[o] + 6 * x[o]) * a * s[1]),
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
    De(), // stores independent var to display + if statements describing current simulation
    pa(),
    Ne("coralReef", 25),
    h.length;
}
