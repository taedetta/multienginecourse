export const vmcTableRows = [
  {
    factor: 'CG – Forward',
    vmc: 'Lowers VMC (Good)',
    control: 'Increases',
    performance: 'Decreases',
    controlNotes:
      'More forward CG creates a longer arm between CG & rudder, which equals more leverage, making rudder more effective. So less rudder is needed to counter asymmetric turning.',
    performanceNotes:
      'Forward CG requires more downward force on the tail to keep AC level, which adds to the overall vertical downward force, therefore decreasing lift (= decreased performance).',
    rowClass: 'vmc-row-blue',
  },
  {
    factor: 'Bank Angle (3 to 5°)',
    vmc: 'Lowers VMC (Good)',
    control: 'Increases',
    performance: 'Increases',
    controlNotes:
      'Banking toward operating engine turns AC in same direction as required rudder input — so banking results in less rudder input needed.',
    performanceNotes:
      '3–5° bank reduces sideslip, which reduces drag and increases performance. No bank would cause more drag, and over-banking (> 5°) will cause loss of VLC needed to offset weight (decreasing performance).',
    rowClass: 'vmc-row-blue',
  },
  {
    factor: 'Weight – Increased (when banking)',
    vmc: 'Lowers VMC (Good)',
    control: 'Increases',
    performance: 'Decreases',
    controlNotes:
      'When turning, more weight requires more lift. When VL is increased, HL is also increased, which works in same direction as rudder — requiring less rudder input.',
    performanceNotes:
      'Lighter weight would provide better rate of climb (performance), but would result in increased VMC (see VMC note).',
    rowClass: 'vmc-row-blue',
  },
  {
    factor: 'Power – Lower',
    vmc: 'Lowers VMC (Good)',
    control: 'Increases',
    performance: 'Decreases',
    controlNotes:
      'Lower power creates less asymmetric turning, thereby requiring less rudder input.',
    performanceNotes: 'Lower power decreases climb (less performance).',
    rowClass: 'vmc-row-green',
  },
  {
    factor: 'Density Altitude – High',
    vmc: 'Lowers VMC (Good)',
    control: 'Increases',
    performance: 'Decreases',
    controlNotes:
      'Higher DA results in less air over wing/prop, creating less turning tendency, but rudder is not substantially affected and remains effective, so control increases. Higher DA decreases adverse yaw effect.',
    performanceNotes:
      'Less dense air decreases performance — same as having less available engine power. More dense air would be like having more power, which would require more rudder input.',
    rowClass: 'vmc-row-green',
  },
  {
    factor: 'Drag Devices – Extended',
    vmc: 'Lowers VMC (Good)',
    control: 'Increases',
    performance: 'Decreases',
    controlNotes:
      'Rearward flowing airstream of prop is interrupted by gear & flaps. The interrupted airflow (less airflow) creates less asymmetric turning tendency.',
    performanceNotes: 'Additional drag decreases rate of climb.',
    rowClass: 'vmc-row-orange',
  },
  {
    factor: 'Prop – Feathered',
    vmc: 'Lowers VMC (Good)',
    control: 'Increases',
    performance: 'Increases',
    controlNotes: 'Feathered prop reduces yawing toward the dead engine.',
    performanceNotes: 'Feathered prop decreases drag. Less drag results in increased performance.',
    rowClass: 'vmc-row-white',
  },
];

export const studyGuides = {
  aerodynamics: {
    title: 'Single Engine Aerodynamics — Complete Study Guide',
    pdfUrl: '/documents/Single Engine Aerodynamics.pdf',
    pdfLabel: 'Single Engine Aerodynamics (PDF)',
    sections: [
      {
        title: 'Critical Engine Definition',
        body: `The critical engine is the engine whose failure would most adversely affect the performance or handling qualities of the aircraft.

In a conventional multi-engine airplane with both engines rotating clockwise (as viewed from the cockpit), the LEFT engine is the critical engine. Four aerodynamic factors combine to make the left engine critical — remember the acronym PAST.`,
      },
      {
        title: 'P — P-Factor',
        body: `P-Factor: The descending propeller blade produces more thrust than the ascending blade because it operates at a higher angle of attack.

If the LEFT engine fails, the P-factor produced from the RIGHT engine is farther from the longitudinal axis of the aircraft, creating a greater yawing moment toward the dead engine. This is why you need substantial rudder input to maintain directional control after an engine failure.

Primary effect: YAW toward the failed engine.`,
      },
      {
        title: 'A — Accelerated Slipstream',
        body: `Accelerated Slipstream: The air being forced over the wing by the operating engine creates extra lift.

The airflow from the RIGHT engine (when the left has failed) creates more induced airflow over the wing and a longer moment arm, producing a greater rolling moment. The operating engine's slipstream essentially pulls the aircraft toward the live engine side.

Primary effects: ROLL and PITCH.`,
      },
      {
        title: 'S — Spiraling Slipstream',
        body: `Spiraling Slipstream: As the propeller rotates and moves through the air, it creates a corkscrew (spiraling) stream of air behind it.

When the LEFT engine is operating, this spiraling air hits the rudder, increasing airflow over the rudder and making it MORE effective.

When the LEFT engine fails, the spiraling slipstream from the RIGHT engine spirals AWAY from the rudder, making the rudder LESS effective — exactly when you need it most.

Direction of spiral: High pressure to low pressure (left to right in standard diagrams). The descending blade is at high angle of attack and produces low pressure airflow. The ascending blade is at low angle of attack and produces high pressure airflow. High pressure pushes the spiraling slipstream to the right.

Primary effect: YAW (rudder effectiveness).`,
      },
      {
        title: 'T — Torque',
        body: `Torque: Newton's third law — for every action there is an equal and opposite reaction. The clockwise rotation of the propeller creates a counter-clockwise rolling moment on the aircraft.

Torque tries to roll the airplane opposite the propeller's direction of rotation. If the left engine fails in a conventional multi-engine airplane, torque from the right engine tries to roll the aircraft to the LEFT.

Primary effect: ROLL.`,
      },
      {
        title: 'Counter-Rotating Props',
        body: `Do all multi-engine aircraft have a critical engine? NO.

Aircraft with counter-rotating propellers do not have a critical engine. Loss of either engine has the same aerodynamic effect because the four PAST factors are balanced between both engines.`,
      },
    ],
  },
  vmc: {
    title: 'VMC Table — Complete Study Guide',
    pdfUrl: '/documents/Vmc Table.pdf',
    pdfLabel: 'VMC Table (PDF)',
    intro: `VMC = Ratio of available engine power vs available rudder power.

VMC is the minimum speed at which directional control can be maintained with the critical engine inoperative (red line — 84 kts published on the Baron 58). Below VMC, you do not have enough rudder authority to counteract the asymmetric thrust from the operating engine.

Performance in this table refers to rate of climb. Study each factor's effect on VMC, control authority, and climb performance. Every factor that lowers VMC is marked "(Good)" for control purposes.`,
    showTable: true,
  },
  oral: {
    title: 'BE58 Oral Review — Complete Study Guide',
    pdfUrl: '/documents/Be58 oral review.pdf',
    pdfLabel: 'BE58 Oral Review (PDF)',
    sections: [
      {
        title: 'Engines & Power',
        body: `Engines: 2 Continental IO-550-C, fuel injected, air cooled.
• IO = "I" fuel injection, "O" horizontally opposed
• 300 HP each engine
• Max rated RPM: 2700
• Max starter time: 30 seconds`,
      },
      {
        title: 'Fuel System',
        body: `Fuel type: 100LL (blue) or 100 (green)
• Total capacity: 172 gallons
• Total usable: 166 gallons (83 usable per side in main tanks)
• Fuel controls between seats: ON/OFF/Cross-feed
• Mechanical fuel pump on each engine; electrical aux pump HI/LOW/OFF on panel
• HI: starting (4 sec when cold) or mechanical pump failure
• LOW: eliminate pressure fluctuations, restart after engine failure

Cross-feed (level flight only):
1. Inoperative engine selector → OFF
2. Aux fuel pump on operative engine → LOW
3. Operative engine selector → Cross-feed
4. Fuel pump OFF or LOW as required
Lockout prevents both selectors in cross-feed or OFF simultaneously.`,
      },
      {
        title: 'Oil & Weight',
        body: `Oil capacity: 12 qts full (9 minimum, 10–11 normal)
Max gross weight: 5500 lbs
Empty weight: See POH — complete W&B for your specific aircraft`,
      },
      {
        title: 'Airspeeds (Memorize All)',
        body: `Vso — 65 kts — Dirty stall (flaps/gear extended)
Vs1 — 78 kts — Clean stall (flaps/gear retracted)
VMC — 84 kts — Minimum control speed, one engine failed (RED LINE)
Vr — 85 kts — Rotation speed
Vsse — 88 kts — Minimum intentional one-engine operation (YELLOW LINE)
Vx — 92 kts — Best angle of climb / minimal intentional 1-engine ops
Vxse — 95 kts — Best angle of climb, single engine
Vyse — 101 kts — Best rate of climb, single engine (BLUE LINE)
Vy — 105 kts — Best rate of climb, both engines
Best glide — 115 kts
Vfe — 122 kts — Max flap extended (white arc 69–122)
Vle — 152 kts — Max gear extended
Emergency descent — 152 kts (practice at 135 kts)`,
      },
      {
        title: 'Service Ceilings & Performance',
        body: `Single-engine service ceiling: Will not climb > 50 fpm
Multi-engine service ceiling: Will not climb > 100 fpm
Accelerate-stop: Distance to accelerate to Vr, throttles idle, full stop (POH chart)
Accelerate-go: Distance to accelerate to Vr, engine fail, feather, continue to 50' AGL (POH chart)`,
      },
      {
        title: 'Propeller System',
        body: `3-blade constant speed propeller.
• Springs & counterweights → high pitch (less RPM at runup, less drag in flight)
• Engine oil pressure → low pitch (higher RPM at runup, more drag/thrust in flight)
• Prop levers on left side of engine quadrant
• Aft levers in flight = high pitch = feathered condition (less drag)
• Full forward on takeoff = low pitch = more thrust

Why don't props feather when oil pressure is lost on shutdown?
Anti-feathering lock pins prevent feathering from loss of oil pressure if the engine shuts down.`,
      },
      {
        title: 'Electrical System',
        body: `28V system. Two 12V batteries wired in series → 24V to two electrical busses.
Two belt-driven 50-amp alternators (one per engine), dual voltage regulators (one active, one backup).
Batteries/alternators power: starters, lights, radios, avionics, heater blower, cowl flaps, landing gear.
Once started, magnetos provide spark to engines.`,
      },
      {
        title: 'Vacuum, Stall Warning, Pitot-Static',
        body: `Vacuum: 2 engine-driven suction pumps as single system. Pop-out red buttons on suction gauge identify failed pump side.

Stall warning: Vane on leading edge of LEFT wing, electrically operated horn. Effective all attitudes/weights/airspeeds; affected by icing.

Pitot-static: 2 pitot tubes (left & right nose), 2 static ports (each side of empennage). Pitot heat via panel switch.`,
      },
      {
        title: 'Landing Gear',
        body: `Electric motor, 2-position switch on panel. Red=up, Green=down.
Mirror on left cowling for nose gear visual; floor indicator under panel center.
Manual hand crank behind co-pilot seat.

⚠️ NEVER operate gear electrically with manual hand crank engaged — can spin and cause damage or injury.

Gear warning horn (3 instances):
1. 12 inches MP or less
2. Gear selector UP on ground (squat switch prevents)
3. Full flaps with gear not extended

Backup gear extension:
1. LDG OR MOTOR circuit breaker — PULL
2. Landing gear handle — DOWN
3. Engage hand crank behind co-pilot seat, turn counterclockwise ~50 turns
4. Check position lights/horn if electrical operative; verify LDG OR RELAY breaker engaged`,
      },
      {
        title: 'Flaps, Brakes, Anti-Ice, Heater',
        body: `Flaps: Electric 3-position (up/approach/down). Red=up, green=down above switch.

Brakes: Hydraulic on main struts. Reservoir in nose with dipstick. Independent systems — pilot pedals only (no co-pilot brakes).

Anti-ice: Pitot heat.
Heater: Janitrol combustion heater.`,
      },
      {
        title: 'Engine Failure & VMC',
        body: `Loss of engine — Bank, ball, blue line:
Mixture/props/throttles full → flaps/gear up → dead foot = dead engine → identify, verify, feather → mixture lean → see emergency checklist.

VMC: Minimum speed for directional control with critical engine inop (84 kts red line). Below VMC, rudder authority is insufficient to counter asymmetric thrust.

Critical engine factors: P-factor (yaw), accelerated slipstream (roll & pitch), spiraling slipstream (yaw), torque (roll).

Manifold pressure: Vacuum on intake stroke; measure of engine power. Decreases ~1" per 1000 ft in climb.

Approach not maintaining glide slope at blue line: Add power to fly level at blue line, recapture glide slope, descend on slope adjusting power.`,
      },
      {
        title: 'Avionics',
        body: `Navigation: Garmin GTN 650Xi
Autopilot: STEC
Communications: Com 1 = GTN 650Xi
Emergency static port: Red placard, pilot lower left — see placard for operation`,
      },
    ],
  },
};
