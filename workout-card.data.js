window.PROGRAM = {
  "author": "C Crawford",
  "avatar": "",
  "sessions": [
    {
      "day": "A",
      "title": "DAY A \u2014 BACK / BICEPS (4-5 days)",
      "date": "2026-08-18",
      "prevDate": "2026-08-13",
      "nextAvailable": {
        "earliest": "2026-08-21",
        "latest": "2026-08-22",
        "fatigue_state": "high",
        "driver": "back recovery (heavy stimulus, high fatigue, ~92h)"
      },
      "stats": [
        "64m",
        "16 sets",
        "10.0k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY A \u2014 BACK / BICEPS (4-5 days) \u2014 1 load\u2191 \u00b7 4 rep\u2191 \u00b7 1 hold.",
        "assess": "8 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>6/8</b> prescriptions passed the validation gate; <b>2 flagged</b> \u2014 see the \u2717 tags below."
      },
      "exercises": [
        {
          "name": "Assisted Pull Up",
          "icon": "\ud83d\udea3",
          "rest": "3:00",
          "cues": [
            "Full ROM",
            "Stretch at bottom",
            "Chest up",
            "Drive elbows down",
            "No kipping",
            "Reduce assistance before adding reps if reps stall"
          ],
          "noWeight": false,
          "loading_type": "band_assisted_bodyweight",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 175 assist \u00d7 11 @ RPE 10 \u00b7 band_assisted_bodyweight \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 175 lb assist \u2014 build toward 15 reps before reducing assistance. Bands 50/75/100/125 stack to 50/75/100/125/150/175/200/225/250/275/300/350 (less assist = harder). Back-off holds its own last load (200) for 8-10 \u2014 it has not reached the 15-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 225,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 225.0,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 200,
                "reps": 8,
                "rpe": 6
              },
              "prop": {
                "lbs": 200.0,
                "reps": "8",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 175,
                "reps": 11,
                "rpe": 10
              },
              "prop": {
                "lbs": 175.0,
                "reps": "11\u201315",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 200,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 200.0,
                "reps": "8\u201310",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 32.95666666666666,
              "decisionScoreRaw": 32.95666666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
              "outcome": {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 175,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 225.0,
                "actualReps": 8.0,
                "loadDelta": 50,
                "repDelta": -7,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 33.37333333333333,
              "decisionScoreRaw": 33.37333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
              "outcome": {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 175,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 225.0,
                "actualReps": 8.0,
                "loadDelta": 50,
                "repDelta": -7,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-26",
              "decision": "hold",
              "decisionScore": 32.33166666666666,
              "decisionScoreRaw": 32.33166666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
              "outcome": {
                "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 175,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 225.0,
                "actualReps": 8.0,
                "loadDelta": 50,
                "repDelta": -7,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-20",
              "decision": "hold",
              "decisionScore": 65.04,
              "decisionScoreRaw": 65.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
              "outcome": {
                "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 175,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 175.0,
                "actualReps": 10.0,
                "loadDelta": 0,
                "repDelta": -5,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-07",
              "decision": "hold",
              "decisionScore": 95.45666666666666,
              "decisionScoreRaw": 95.45666666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
              "outcome": {
                "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 125,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 175.0,
                "actualReps": 8.0,
                "loadDelta": 50,
                "repDelta": -7,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "date": "2026-08-06",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "date": "2026-08-01",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
                "date": "2026-07-26",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
                "date": "2026-07-20",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
                "date": "2026-07-07",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 0,
            "regressCount": 5,
            "neutralCount": 0,
            "scores": [
              -1.0,
              -1.0,
              -1.0,
              -1.0,
              -1.0
            ]
          }
        },
        {
          "name": "Barbell Bent Over Row",
          "icon": "\ud83d\udea3",
          "rest": "3:00",
          "cues": [
            "Stable torso",
            "Pull to low chest / upper abs",
            "No jerking",
            "Control eccentric",
            "Do not turn it into a hip hinge shrug"
          ],
          "noWeight": false,
          "loading_type": "barbell",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 143 lb \u00d7 9 @ RPE 10 \u00b7 barbell \u00b7 anchor 10 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 143.3 \u2014 reps below anchor; chase reps to ~10 at RPE 9 before adding load. Back-off holds its own last load (132.3) for 10 \u2014 it has not reached the 10-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 88,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 77.2,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 115.5,
                "reps": 8,
                "rpe": 6
              },
              "prop": {
                "lbs": 115.7,
                "reps": "5",
                "rpe": 6.5
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 143,
                "reps": 9,
                "rpe": 10
              },
              "prop": {
                "lbs": 143.3,
                "reps": "9\u201310",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 132,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 132.3,
                "reps": "10",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 150.19,
              "decisionScoreRaw": 150.19,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
              "outcome": {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 143,
                "prescribedReps": 10,
                "prescribedRpe": 10,
                "actualLoad": 143.0,
                "actualReps": 8.0,
                "loadDelta": 0,
                "repDelta": -2,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 146.5233333333333,
              "decisionScoreRaw": 146.5233333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
              "outcome": {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "behaviorClass": "load_undershoot",
                "prescribedLoad": 138,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 132.0,
                "actualReps": 10.0,
                "loadDelta": -6,
                "repDelta": 1,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-26",
              "decision": "hold",
              "decisionScore": 145.42333333333332,
              "decisionScoreRaw": 145.42333333333332,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
              "outcome": {
                "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
                "behaviorClass": "matched",
                "prescribedLoad": 132,
                "prescribedReps": 10,
                "prescribedRpe": 10,
                "actualLoad": 132.0,
                "actualReps": 9.0,
                "loadDelta": 0,
                "repDelta": -1,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-20",
              "decision": "hold",
              "decisionScore": 147.80666666666664,
              "decisionScoreRaw": 147.80666666666664,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
              "outcome": {
                "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 132,
                "prescribedReps": 10,
                "prescribedRpe": 10,
                "actualLoad": 132.0,
                "actualReps": 8.0,
                "loadDelta": 0,
                "repDelta": -2,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-07",
              "decision": "hold",
              "decisionScore": 163.64666666666668,
              "decisionScoreRaw": 163.64666666666668,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
              "outcome": {
                "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 154,
                "prescribedReps": 10,
                "prescribedRpe": 10,
                "actualLoad": 154.0,
                "actualReps": 7.0,
                "loadDelta": 0,
                "repDelta": -3,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "date": "2026-08-06",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "date": "2026-08-01",
                "behaviorClass": "load_undershoot",
                "effectivenessScore": 0.0,
                "valid": true
              },
              {
                "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
                "date": "2026-07-26",
                "behaviorClass": "matched",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
                "date": "2026-07-20",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
                "date": "2026-07-07",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 1,
            "regressCount": 3,
            "neutralCount": 1,
            "scores": [
              -1.0,
              0.0,
              1.0,
              -1.0,
              -1.0
            ]
          }
        },
        {
          "name": "Dumbbell Incline Bicep Curl",
          "icon": "\ud83d\udcaa",
          "rest": "2:00",
          "cues": [
            "Full stretch with shoulder extended",
            "Elbows fixed",
            "Supinate hard at top",
            "2\u20133 sec eccentric",
            "No shoulder movement"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 35 lb \u00d7 11 @ RPE 10 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 35 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (32.5) for 10-12 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 20,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 20,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null
              },
              "prop": {
                "lbs": 35,
                "reps": "11\u201315",
                "rpe": 9.5
              }
            },
            {
              "type": 2,
              "last": {
                "lbs": 35,
                "reps": 11,
                "rpe": 10
              },
              "prop": {
                "lbs": 32.5,
                "reps": "10\u201312",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 32.5,
                "reps": 10,
                "rpe": 10
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": "Day B (chest/arms) also trains arms (assumed next-day spacing, not a logged session). This exercise's own recovery estimate (62h, stretch stimulus, high fatigue) extends to 2026-08-21, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 37.151111111111106,
              "decisionScoreRaw": 37.151111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
              "outcome": {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 32,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 32.5,
                "actualReps": 10.0,
                "loadDelta": 0,
                "repDelta": -5,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-07",
              "decision": "hold",
              "decisionScore": 28.31777777777778,
              "decisionScoreRaw": 28.31777777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
              "outcome": {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 25,
                "prescribedReps": 10,
                "prescribedRpe": 10,
                "actualLoad": 22.5,
                "actualReps": 14.0,
                "loadDelta": -2,
                "repDelta": 4,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 35.151111111111106,
              "decisionScoreRaw": 35.151111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
              "outcome": {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 32,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 30.0,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 3,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 36.59555555555555,
              "decisionScoreRaw": 36.59555555555555,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
              "outcome": {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 32,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 30.0,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 3,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 34.51222222222222,
              "decisionScoreRaw": 34.51222222222222,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
              "outcome": {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 30,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 30.0,
                "actualReps": 11.0,
                "loadDelta": 0,
                "repDelta": -4,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "date": "2026-08-08",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "date": "2026-08-07",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "date": "2026-08-06",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "date": "2026-08-04",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "date": "2026-08-01",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 3,
            "regressCount": 2,
            "neutralCount": 0,
            "scores": [
              -1.0,
              1.0,
              1.0,
              1.0,
              -1.0
            ]
          }
        },
        {
          "name": "Dumbbell One Arm Row",
          "icon": "\ud83d\udea3",
          "rest": "3:00",
          "cues": [
            "Stretch at bottom",
            "Drive elbow back",
            "No torso rotation",
            "Keep ribcage locked",
            "Control lowering"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 75 lb \u00d7 13 @ RPE 10 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set 75\u00d713 at RPE 10 (\u2265 anchor 12), backoffs productive \u2014 top set 75\u219280; +6.7% load costs ~2 reps, so the rep target drops 13\u219211 [range 6-11]. Back-off earned its own jump too \u2014 72.5 for 10-12, rebuilding to the reps it just produced.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 40,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 45,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 60,
                "reps": 6,
                "rpe": 6
              },
              "prop": {
                "lbs": 65,
                "reps": "5",
                "rpe": 6.5
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 75,
                "reps": 13,
                "rpe": 10
              },
              "prop": {
                "lbs": 80,
                "reps": "6\u201311",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 67.5,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 72.5,
                "reps": "10\u201312",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 74.70666666666666,
              "decisionScoreRaw": 74.70666666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
              "outcome": {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 75,
                "prescribedReps": 11,
                "prescribedRpe": 9,
                "actualLoad": 70.0,
                "actualReps": 13.0,
                "loadDelta": -5,
                "repDelta": 2,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 72.04,
              "decisionScoreRaw": 72.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
              "outcome": {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "behaviorClass": "load_undershoot",
                "prescribedLoad": 68,
                "prescribedReps": 12,
                "prescribedRpe": 9,
                "actualLoad": 65.0,
                "actualReps": 13.0,
                "loadDelta": -2,
                "repDelta": 1,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-26",
              "decision": "hold",
              "decisionScore": 69.58166666666666,
              "decisionScoreRaw": 69.58166666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
              "outcome": {
                "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
                "behaviorClass": "matched",
                "prescribedLoad": 65,
                "prescribedReps": 12,
                "prescribedRpe": 10,
                "actualLoad": 65.0,
                "actualReps": 11.0,
                "loadDelta": 0,
                "repDelta": -1,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-20",
              "decision": "hold",
              "decisionScore": 75.31777777777778,
              "decisionScoreRaw": 75.31777777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
              "outcome": {
                "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
                "behaviorClass": "load_undershoot",
                "prescribedLoad": 62,
                "prescribedReps": 11,
                "prescribedRpe": 10,
                "actualLoad": 60.0,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 1,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-07",
              "decision": "hold",
              "decisionScore": 84.8525,
              "decisionScoreRaw": 84.8525,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
              "outcome": {
                "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 75,
                "prescribedReps": 13,
                "prescribedRpe": 10,
                "actualLoad": 75.0,
                "actualReps": 11.0,
                "loadDelta": 0,
                "repDelta": -2,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "date": "2026-08-06",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "date": "2026-08-01",
                "behaviorClass": "load_undershoot",
                "effectivenessScore": 0.0,
                "valid": true
              },
              {
                "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
                "date": "2026-07-26",
                "behaviorClass": "matched",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
                "date": "2026-07-20",
                "behaviorClass": "load_undershoot",
                "effectivenessScore": 0.0,
                "valid": true
              },
              {
                "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
                "date": "2026-07-07",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 2,
            "regressCount": 1,
            "neutralCount": 2,
            "scores": [
              1.0,
              0.0,
              1.0,
              0.0,
              -1.0
            ]
          }
        },
        {
          "name": "Dumbbell Cross Body Hammer Curl",
          "icon": "\ud83d\udcaa",
          "rest": "2:00",
          "cues": [
            "Neutral grip fixed",
            "Elbow slightly forward",
            "No torso swing",
            "Control eccentric",
            "Keep tension on brachialis"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "hold",
          "assess": "Last top set: 32.5 lb \u00d7 12 @ RPE 10 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 32.5 \u2014 backoffs not yet productive; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (30) for 11-13 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 17.5,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 17.5,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 32.5,
                "reps": 12,
                "rpe": 10
              },
              "prop": {
                "lbs": 32.5,
                "reps": "12\u201315",
                "rpe": 9.5
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 30,
                "reps": 11,
                "rpe": 9
              },
              "prop": {
                "lbs": 30,
                "reps": "11\u201313",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": "Day B (chest/arms) also trains arms (assumed next-day spacing, not a logged session). This exercise's own recovery estimate (62h, stretch stimulus, high fatigue) extends to 2026-08-21, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 34.428888888888885,
              "decisionScoreRaw": 34.428888888888885,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
              "outcome": {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 30,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 27.5,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 3,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 33.98444444444444,
              "decisionScoreRaw": 33.98444444444444,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
              "outcome": {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 30,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 30.0,
                "actualReps": 9.0,
                "loadDelta": 0,
                "repDelta": -6,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-26",
              "decision": "hold",
              "decisionScore": 34.59555555555555,
              "decisionScoreRaw": 34.59555555555555,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
              "outcome": {
                "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 30,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 30.0,
                "actualReps": 9.0,
                "loadDelta": 0,
                "repDelta": -6,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-20",
              "decision": "hold",
              "decisionScore": 39.54,
              "decisionScoreRaw": 39.54,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
              "outcome": {
                "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 30,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 30.0,
                "actualReps": 10.0,
                "loadDelta": 0,
                "repDelta": -5,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-07",
              "decision": "hold",
              "decisionScore": 41.54,
              "decisionScoreRaw": 41.54,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
              "outcome": {
                "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 40,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 40.0,
                "actualReps": 7.0,
                "loadDelta": 0,
                "repDelta": -8,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "date": "2026-08-06",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "date": "2026-08-01",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
                "date": "2026-07-26",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
                "date": "2026-07-20",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
                "date": "2026-07-07",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 1,
            "regressCount": 4,
            "neutralCount": 0,
            "scores": [
              1.0,
              -1.0,
              -1.0,
              -1.0,
              -1.0
            ]
          }
        },
        {
          "name": "Cable Crunch",
          "icon": "\ud83c\udf00",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "fail",
          "action": "review_required",
          "assess": "Last top set: load and reps not recorded.",
          "rationale": "<b>\u2717 QC fail: insufficient_performed_input, missing(performed_reps), missing(performed_load)</b> \u00b7 Cannot prescribe: last session's load and reps were not logged for this exercise. Record them and the engine resumes \u2014 no load or rep target is being asserted from missing data.",
          "sets": [
            {
              "type": 1,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null
        },
        {
          "name": "Seated Lateral Raise",
          "icon": "\ud83d\uded7",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 27.5 lb \u00d7 10 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 27.5 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off 25 for 12-15 \u2014 derived from the top set; no matching performed back-off was logged.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null
              },
              "prop": {
                "lbs": 15,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null
              },
              "prop": {
                "lbs": 27.5,
                "reps": "10\u201315",
                "rpe": 9.5
              }
            },
            {
              "type": 1,
              "last": {
                "lbs": 27.5,
                "reps": 10,
                "rpe": null
              },
              "prop": {
                "lbs": 25,
                "reps": "12\u201315",
                "rpe": 9.0
              }
            },
            {
              "type": 2,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 29.810833333333335,
              "decisionScoreRaw": 29.810833333333335,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
              "outcome": {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 28,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 25.0,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 3,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 22.54,
              "decisionScoreRaw": 22.54,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
              "outcome": {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "behaviorClass": "insufficient_data",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 15.0,
                "actualReps": 15.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 27.006666666666668,
              "decisionScoreRaw": 27.006666666666668,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
              "outcome": {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 25,
                "prescribedReps": 8,
                "prescribedRpe": 9,
                "actualLoad": 22.5,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 4,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-02",
              "decision": "hold",
              "decisionScore": 20.87333333333333,
              "decisionScoreRaw": 20.87333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
              "outcome": {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "behaviorClass": "insufficient_data",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 12.5,
                "actualReps": 20.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 22.04,
              "decisionScoreRaw": 22.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
              "outcome": {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 18,
                "prescribedReps": 9,
                "prescribedRpe": 10,
                "actualLoad": 15.0,
                "actualReps": 15.0,
                "loadDelta": -2,
                "repDelta": 6,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "date": "2026-08-08",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "date": "2026-08-06",
                "behaviorClass": "insufficient_data",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "date": "2026-08-04",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "date": "2026-08-02",
                "behaviorClass": "insufficient_data",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "date": "2026-08-01",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              }
            ],
            "validCount": 3,
            "progressCount": 3,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": [
              1.0,
              1.0,
              1.0
            ]
          }
        },
        {
          "name": "Triceps Pushdown",
          "icon": "\ud83d\udd17",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "band_combo",
          "qc": "fail",
          "action": "review_required",
          "assess": "Last top set: load and reps not recorded.",
          "rationale": "<b>\u2717 QC fail: insufficient_performed_input, missing(performed_reps), missing(performed_load)</b> \u00b7 Cannot prescribe: last session's load and reps were not logged for this exercise. Record them and the engine resumes \u2014 no load or rep target is being asserted from missing data.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 5
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": 2,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: increase (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": "Day B (chest/arms) also trains arms (assumed next-day spacing, not a logged session). This exercise's own recovery estimate (38h, volume stimulus, moderate fatigue) extends to 2026-08-20, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "increase",
              "decisionScore": 360.3177777777778,
              "decisionScoreRaw": 360.3177777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
              "outcome": {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 300,
                "prescribedReps": 15,
                "prescribedRpe": 9,
                "actualLoad": 275.0,
                "actualReps": 17.0,
                "loadDelta": -25,
                "repDelta": 2,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-07",
              "decision": "increase",
              "decisionScore": 360.04,
              "decisionScoreRaw": 360.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
              "outcome": {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 300,
                "prescribedReps": 20,
                "prescribedRpe": 9,
                "actualLoad": 300.0,
                "actualReps": 12.0,
                "loadDelta": 0,
                "repDelta": -8,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-04",
              "decision": "increase",
              "decisionScore": 375.04,
              "decisionScoreRaw": 375.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
              "outcome": {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 275,
                "prescribedReps": 15,
                "prescribedRpe": 9,
                "actualLoad": 250.0,
                "actualReps": 20.0,
                "loadDelta": -25,
                "repDelta": 5,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-02",
              "decision": "increase",
              "decisionScore": 343.165,
              "decisionScoreRaw": 343.165,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
              "outcome": {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 300,
                "prescribedReps": 20,
                "prescribedRpe": 9,
                "actualLoad": 300.0,
                "actualReps": 8.0,
                "loadDelta": 0,
                "repDelta": -12,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-01",
              "decision": "increase",
              "decisionScore": 333.37333333333333,
              "decisionScoreRaw": 333.37333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
              "outcome": {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "behaviorClass": "insufficient_data",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 200.0,
                "actualReps": 20.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "date": "2026-08-08",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "date": "2026-08-07",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "date": "2026-08-04",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "date": "2026-08-02",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "date": "2026-08-01",
                "behaviorClass": "insufficient_data",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 4,
            "progressCount": 2,
            "regressCount": 2,
            "neutralCount": 0,
            "scores": [
              1.0,
              -1.0,
              1.0,
              -1.0
            ]
          }
        }
      ],
      "sequencingAdvisory": "\"Dumbbell Incline Bicep Curl\" (isolation/accessory) is displayed before \"Dumbbell One Arm Row\" (a major/compound movement) -- major movements are usually sequenced first so accessory fatigue doesn't compromise them. ASSUMPTION, not a confirmed defect: this reflects the displayed/template order the session was logged in, not verified execution order -- VOLM logs no per-set/per-group timestamps, only session-level start/end times."
    },
    {
      "day": "C",
      "title": "DAY C \u2014 DELTS / ABS (3-4 days)",
      "date": "2026-08-15",
      "prevDate": "2026-08-08",
      "nextAvailable": {
        "earliest": "2026-08-18",
        "latest": "2026-08-19",
        "fatigue_state": "elevated",
        "driver": "delts recovery (heavy stimulus, elevated fatigue, ~82h)"
      },
      "stats": [
        "70m",
        "16 sets",
        "11.4k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY C \u2014 DELTS / ABS (3-4 days) \u2014 1 load\u2191 \u00b7 4 rep\u2191 \u00b7 0 hold.",
        "assess": "6 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>5/6</b> prescriptions passed the validation gate; <b>1 flagged</b> \u2014 see the \u2717 tags below."
      },
      "exercises": [
        {
          "name": "Seated Lateral Raise",
          "icon": "\ud83d\uded7",
          "rest": "2:00",
          "cues": [
            "Lead with elbows",
            "Stop if traps take over",
            "2\u20133 sec eccentric",
            "No tempo breaks",
            "Constant tension"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 27.5 lb \u00d7 10 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 27.5 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (25) for 12-14 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 15,
                "reps": 10,
                "rpe": 5
              },
              "prop": {
                "lbs": 15,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 27.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 27.5,
                "reps": "10\u201315",
                "rpe": 9.5
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 25,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 25,
                "reps": "12\u201314",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 22.5,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": 5,
              "last": {
                "lbs": 20,
                "reps": 12,
                "rpe": null
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 29.810833333333335,
              "decisionScoreRaw": 29.810833333333335,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
              "outcome": {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 28,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 25.0,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 3,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 22.54,
              "decisionScoreRaw": 22.54,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
              "outcome": {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "behaviorClass": "insufficient_data",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 15.0,
                "actualReps": 15.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 27.006666666666668,
              "decisionScoreRaw": 27.006666666666668,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
              "outcome": {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 25,
                "prescribedReps": 8,
                "prescribedRpe": 9,
                "actualLoad": 22.5,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 4,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-02",
              "decision": "hold",
              "decisionScore": 20.87333333333333,
              "decisionScoreRaw": 20.87333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
              "outcome": {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "behaviorClass": "insufficient_data",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 12.5,
                "actualReps": 20.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 22.04,
              "decisionScoreRaw": 22.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
              "outcome": {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 18,
                "prescribedReps": 9,
                "prescribedRpe": 10,
                "actualLoad": 15.0,
                "actualReps": 15.0,
                "loadDelta": -2,
                "repDelta": 6,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "date": "2026-08-08",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "date": "2026-08-06",
                "behaviorClass": "insufficient_data",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "date": "2026-08-04",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "date": "2026-08-02",
                "behaviorClass": "insufficient_data",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "date": "2026-08-01",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              }
            ],
            "validCount": 3,
            "progressCount": 3,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": [
              1.0,
              1.0,
              1.0
            ]
          }
        },
        {
          "name": "Band Lateral Raise",
          "icon": "\ud83d\uded7",
          "rest": "2:00",
          "cues": [
            "Step out to create bottom tension",
            "Smooth tempo",
            "No slack at bottom",
            "No torso sway",
            "Keep delts loaded throughout"
          ],
          "noWeight": false,
          "loading_type": "band_resisted_isolation",
          "qc": "fail",
          "action": "progress_reps_tempo",
          "assess": "Last top set: 65 lb \u00d7 18 @ RPE 9 \u00b7 band_resisted_isolation \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2717 QC fail: set_role_conflict(warmup_labeled_set_at_working_effort(set 1 @ RPE 8))</b> \u00b7 Already on the top band (65 lb). No heavier band in inventory \u2014 progress reps \u2192 tempo \u2192 pauses \u2192 ROM \u2192 volume before any new band. Back-off holds its own last load (55) for 18-20 \u2014 it has not reached the 15-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 55,
                "reps": 18,
                "rpe": 8
              },
              "prop": {
                "lbs": 55.0,
                "reps": "5",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 65,
                "reps": 18,
                "rpe": 9
              },
              "prop": {
                "lbs": 65.0,
                "reps": "18\u201320",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 55,
                "reps": 18,
                "rpe": 9
              },
              "prop": {
                "lbs": 55.0,
                "reps": "18\u201320",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 94.37333333333333,
              "decisionScoreRaw": 94.37333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
              "outcome": {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 65,
                "prescribedReps": 20,
                "prescribedRpe": 9,
                "actualLoad": 65.0,
                "actualReps": 16.0,
                "loadDelta": 0,
                "repDelta": -4,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 91.70666666666668,
              "decisionScoreRaw": 91.70666666666668,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
              "outcome": {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 65,
                "prescribedReps": 21,
                "prescribedRpe": 9,
                "actualLoad": 65.0,
                "actualReps": 14.0,
                "loadDelta": 0,
                "repDelta": -7,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-30",
              "decision": "hold",
              "decisionScore": 88.42888888888888,
              "decisionScoreRaw": 88.42888888888888,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "c4994788-2c8c-4fdb-8220-2bbd54ad696f",
              "outcome": {
                "sessionId": "c4994788-2c8c-4fdb-8220-2bbd54ad696f",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 65,
                "prescribedReps": 20,
                "prescribedRpe": 9,
                "actualLoad": 65.0,
                "actualReps": 12.0,
                "loadDelta": 0,
                "repDelta": -8,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-25",
              "decision": "hold",
              "decisionScore": 87.37333333333333,
              "decisionScoreRaw": 87.37333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "83713f49-b352-4815-baf4-0a7f4bba0aa3",
              "outcome": {
                "sessionId": "83713f49-b352-4815-baf4-0a7f4bba0aa3",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 65,
                "prescribedReps": 20,
                "prescribedRpe": 9,
                "actualLoad": 65.0,
                "actualReps": 10.0,
                "loadDelta": 0,
                "repDelta": -10,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-19",
              "decision": "hold",
              "decisionScore": 88.04,
              "decisionScoreRaw": 88.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "d23c4815-40b8-457f-ad27-154f817249fd",
              "outcome": {
                "sessionId": "d23c4815-40b8-457f-ad27-154f817249fd",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 65,
                "prescribedReps": 15,
                "prescribedRpe": 9,
                "actualLoad": 55.0,
                "actualReps": 18.0,
                "loadDelta": -10,
                "repDelta": 3,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "date": "2026-08-08",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "date": "2026-08-04",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "c4994788-2c8c-4fdb-8220-2bbd54ad696f",
                "date": "2026-07-30",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "83713f49-b352-4815-baf4-0a7f4bba0aa3",
                "date": "2026-07-25",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "d23c4815-40b8-457f-ad27-154f817249fd",
                "date": "2026-07-19",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 1,
            "regressCount": 4,
            "neutralCount": 0,
            "scores": [
              -1.0,
              -1.0,
              -1.0,
              -1.0,
              1.0
            ]
          }
        },
        {
          "name": "Rear Dumbbell Raise",
          "icon": "\ud83d\uded7",
          "rest": "2:00",
          "cues": [
            "Chest supported or hinged",
            "No trap dominance",
            "1-sec squeeze at top",
            "Control lowering",
            "Raise through rear delt, not hands"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 22.5 lb \u00d7 10 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 22.5 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (20) for 13-15 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 15,
                "reps": 10,
                "rpe": 5
              },
              "prop": {
                "lbs": 12.5,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 22.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 22.5,
                "reps": "10\u201315",
                "rpe": 9.5
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 20,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 20,
                "reps": "13\u201315",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 17.5,
                "reps": 14,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 26.394166666666667,
              "decisionScoreRaw": 26.394166666666667,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
              "outcome": {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 22,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 22.5,
                "actualReps": 9.0,
                "loadDelta": 0,
                "repDelta": -6,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 25.29,
              "decisionScoreRaw": 25.29,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
              "outcome": {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 22,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 20.0,
                "actualReps": 13.0,
                "loadDelta": -2,
                "repDelta": 4,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-30",
              "decision": "hold",
              "decisionScore": 25.081666666666663,
              "decisionScoreRaw": 25.081666666666663,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "c4994788-2c8c-4fdb-8220-2bbd54ad696f",
              "outcome": {
                "sessionId": "c4994788-2c8c-4fdb-8220-2bbd54ad696f",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 20,
                "prescribedReps": 17,
                "prescribedRpe": 10,
                "actualLoad": 20.0,
                "actualReps": 10.0,
                "loadDelta": 0,
                "repDelta": -7,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-25",
              "decision": "hold",
              "decisionScore": 24.1025,
              "decisionScoreRaw": 24.1025,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "83713f49-b352-4815-baf4-0a7f4bba0aa3",
              "outcome": {
                "sessionId": "83713f49-b352-4815-baf4-0a7f4bba0aa3",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 20,
                "prescribedReps": 7,
                "prescribedRpe": 10,
                "actualLoad": 17.5,
                "actualReps": 15.0,
                "loadDelta": -2,
                "repDelta": 8,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-19",
              "decision": "hold",
              "decisionScore": 22.43583333333333,
              "decisionScoreRaw": 22.43583333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "d23c4815-40b8-457f-ad27-154f817249fd",
              "outcome": {
                "sessionId": "d23c4815-40b8-457f-ad27-154f817249fd",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 20,
                "prescribedReps": 8,
                "prescribedRpe": 10,
                "actualLoad": 17.5,
                "actualReps": 13.0,
                "loadDelta": -2,
                "repDelta": 5,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "date": "2026-08-08",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "date": "2026-08-04",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "c4994788-2c8c-4fdb-8220-2bbd54ad696f",
                "date": "2026-07-30",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "83713f49-b352-4815-baf4-0a7f4bba0aa3",
                "date": "2026-07-25",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "d23c4815-40b8-457f-ad27-154f817249fd",
                "date": "2026-07-19",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 3,
            "regressCount": 2,
            "neutralCount": 0,
            "scores": [
              -1.0,
              1.0,
              -1.0,
              1.0,
              1.0
            ]
          }
        },
        {
          "name": "Dumbbell Incline Bicep Curl",
          "icon": "\ud83d\udcaa",
          "rest": "2:00",
          "cues": [
            "Strict form only",
            "No failure",
            "Continuous tension",
            "Pump and stretch focus",
            "Do not create spillover fatigue"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 32.5 lb \u00d7 13 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (13/12) \u2014 earn the jump; top set 32.5\u219235; +7.7% load costs ~3 reps, so the rep target drops 13\u219210 [range 8-10]. Isolation: only loaded once the whole cluster is productive. Back-off earned its own jump too \u2014 32.5 for 10-12, rebuilding to the reps it just produced.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 20,
                "reps": 10,
                "rpe": 5
              },
              "prop": {
                "lbs": 20,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 32.5,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 35,
                "reps": "8\u201310",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 30,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 32.5,
                "reps": "10\u201312",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 37.151111111111106,
              "decisionScoreRaw": 37.151111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
              "outcome": {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 32,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 32.5,
                "actualReps": 10.0,
                "loadDelta": 0,
                "repDelta": -5,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-07",
              "decision": "hold",
              "decisionScore": 28.31777777777778,
              "decisionScoreRaw": 28.31777777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
              "outcome": {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 25,
                "prescribedReps": 10,
                "prescribedRpe": 10,
                "actualLoad": 22.5,
                "actualReps": 14.0,
                "loadDelta": -2,
                "repDelta": 4,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 35.151111111111106,
              "decisionScoreRaw": 35.151111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
              "outcome": {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 32,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 30.0,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 3,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 36.59555555555555,
              "decisionScoreRaw": 36.59555555555555,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
              "outcome": {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 32,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 30.0,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 3,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 34.51222222222222,
              "decisionScoreRaw": 34.51222222222222,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
              "outcome": {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 30,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 30.0,
                "actualReps": 11.0,
                "loadDelta": 0,
                "repDelta": -4,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "date": "2026-08-08",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "date": "2026-08-07",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "date": "2026-08-06",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "date": "2026-08-04",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "date": "2026-08-01",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 3,
            "regressCount": 2,
            "neutralCount": 0,
            "scores": [
              -1.0,
              1.0,
              1.0,
              1.0,
              -1.0
            ]
          }
        },
        {
          "name": "Hanging Leg Raise",
          "icon": "\ud83c\udf00",
          "rest": "2:00",
          "cues": [
            "Posterior pelvic tilt at top",
            "No swinging",
            "Raise pelvis, not just knees",
            "Lower under control",
            "Keep abs loaded"
          ],
          "noWeight": true,
          "loading_type": "bodyweight",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 0 lb \u00d7 19 @ RPE 9 \u00b7 bodyweight \u00b7 anchor 20 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Bodyweight \u2014 chase reps to \u226520 at RPE 9 before adding external load. Back-off holds its own last load (bodyweight) for 16-18 \u2014 it has not reached the 20-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null
              },
              "prop": {
                "lbs": null,
                "reps": "8",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null
              },
              "prop": {
                "lbs": null,
                "reps": "19\u201325",
                "rpe": 9.0
              }
            },
            {
              "type": 1,
              "last": {
                "lbs": 0,
                "reps": 19,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": "16\u201318",
                "rpe": 9.0
              }
            },
            {
              "type": 2,
              "last": {
                "lbs": 0,
                "reps": 16,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 0,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null
        },
        {
          "name": "Triceps Pushdown",
          "icon": "\ud83d\udd17",
          "rest": "2:00",
          "cues": [
            "Stay upright",
            "Elbows close to body",
            "Full lockout squeeze",
            "Controlled eccentric",
            "No bouncing",
            "Stop before shoulder discomfort"
          ],
          "noWeight": false,
          "loading_type": "band_combo",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 300 lb \u00d7 12 @ RPE 6 \u00b7 band_combo \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 300 lb band stack \u2014 chase reps to ~15 at RPE 9 before adding a band. Bands 50/75/100/125 stack to 50/75/100/125/150/175/200/225/250/275/300/350. Back-off holds its own last load (300) for 10-12 \u2014 it has not reached the 15-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 200,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 275.0,
                "reps": "4",
                "rpe": 6.0
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 250,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 300,
                "reps": 12,
                "rpe": 6
              },
              "prop": {
                "lbs": 300.0,
                "reps": "12\u201320",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 300,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 300.0,
                "reps": "10\u201312",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: increase (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "increase",
              "decisionScore": 360.3177777777778,
              "decisionScoreRaw": 360.3177777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
              "outcome": {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 300,
                "prescribedReps": 15,
                "prescribedRpe": 9,
                "actualLoad": 275.0,
                "actualReps": 17.0,
                "loadDelta": -25,
                "repDelta": 2,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-07",
              "decision": "increase",
              "decisionScore": 360.04,
              "decisionScoreRaw": 360.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
              "outcome": {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 300,
                "prescribedReps": 20,
                "prescribedRpe": 9,
                "actualLoad": 300.0,
                "actualReps": 12.0,
                "loadDelta": 0,
                "repDelta": -8,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-04",
              "decision": "increase",
              "decisionScore": 375.04,
              "decisionScoreRaw": 375.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
              "outcome": {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 275,
                "prescribedReps": 15,
                "prescribedRpe": 9,
                "actualLoad": 250.0,
                "actualReps": 20.0,
                "loadDelta": -25,
                "repDelta": 5,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-02",
              "decision": "increase",
              "decisionScore": 343.165,
              "decisionScoreRaw": 343.165,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
              "outcome": {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 300,
                "prescribedReps": 20,
                "prescribedRpe": 9,
                "actualLoad": 300.0,
                "actualReps": 8.0,
                "loadDelta": 0,
                "repDelta": -12,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-01",
              "decision": "increase",
              "decisionScore": 333.37333333333333,
              "decisionScoreRaw": 333.37333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
              "outcome": {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "behaviorClass": "insufficient_data",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 200.0,
                "actualReps": 20.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "date": "2026-08-08",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "date": "2026-08-07",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "date": "2026-08-04",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "date": "2026-08-02",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "date": "2026-08-01",
                "behaviorClass": "insufficient_data",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 4,
            "progressCount": 2,
            "regressCount": 2,
            "neutralCount": 0,
            "scores": [
              1.0,
              -1.0,
              1.0,
              -1.0
            ]
          }
        }
      ],
      "sequencingAdvisory": "\"Seated Lateral Raise\" (isolation/accessory) is displayed before \"Hanging Leg Raise\" (a major/compound movement) -- major movements are usually sequenced first so accessory fatigue doesn't compromise them. ASSUMPTION, not a confirmed defect: this reflects the displayed/template order the session was logged in, not verified execution order -- VOLM logs no per-set/per-group timestamps, only session-level start/end times."
    },
    {
      "day": "B",
      "title": "DAY B - CHEST / TRICEPS  (5 days)",
      "date": "2026-08-14",
      "prevDate": "2026-08-07",
      "nextAvailable": {
        "earliest": "2026-08-17",
        "latest": "2026-08-18",
        "fatigue_state": "elevated",
        "driver": "chest recovery (heavy stimulus, elevated fatigue, ~84h)"
      },
      "stats": [
        "64m",
        "13 sets",
        "9.8k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY B - CHEST / TRICEPS  (5 days) \u2014 2 load\u2191 \u00b7 3 rep\u2191 \u00b7 0 hold.",
        "assess": "7 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>5/7</b> prescriptions passed the validation gate; <b>2 flagged</b> \u2014 see the \u2717 tags below."
      },
      "exercises": [
        {
          "name": "Barbell Incline Bench Press",
          "icon": "\ud83c\udfcb\ufe0f",
          "rest": "3:00",
          "cues": [
            "Shoulder blades set",
            "Lower under control",
            "Press through upper chest",
            "No bouncing",
            "Stop before bar speed dies"
          ],
          "noWeight": false,
          "loading_type": "barbell",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 148.5 lb \u00d7 9 @ RPE 9 \u00b7 barbell \u00b7 anchor 10 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 148.8 \u2014 reps below anchor; chase reps to ~10 at RPE 9 before adding load. Back-off holds its own last load (132.3) for 7-9 \u2014 it has not reached the 10-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 87.5,
                "reps": 10,
                "rpe": 5
              },
              "prop": {
                "lbs": 82.7,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 110,
                "reps": 8,
                "rpe": 6
              },
              "prop": {
                "lbs": 121.3,
                "reps": "5",
                "rpe": 6.5
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 132,
                "reps": 5,
                "rpe": 7
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 148.5,
                "reps": 9,
                "rpe": 9
              },
              "prop": {
                "lbs": 148.8,
                "reps": "9\u201310",
                "rpe": 9.0
              }
            },
            {
              "type": 5,
              "last": {
                "lbs": 132.1,
                "reps": 7,
                "rpe": 9
              },
              "prop": {
                "lbs": 132.3,
                "reps": "7\u20139",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-07",
              "decision": "hold",
              "decisionScore": 152.86666666666665,
              "decisionScoreRaw": 152.86666666666665,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
              "outcome": {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "behaviorClass": "load_undershoot",
                "prescribedLoad": 149,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 143.0,
                "actualReps": 10.0,
                "loadDelta": -6,
                "repDelta": 1,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-02",
              "decision": "hold",
              "decisionScore": 152.5,
              "decisionScoreRaw": 152.5,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
              "outcome": {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "behaviorClass": "matched",
                "prescribedLoad": 143,
                "prescribedReps": 10,
                "prescribedRpe": 10,
                "actualLoad": 143.0,
                "actualReps": 9.0,
                "loadDelta": 0,
                "repDelta": -1,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-28",
              "decision": "hold",
              "decisionScore": 146.33999999999997,
              "decisionScoreRaw": 146.33999999999997,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "57e204c2-3cd9-433c-b8e0-e446777e5450",
              "outcome": {
                "sessionId": "57e204c2-3cd9-433c-b8e0-e446777e5450",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 132,
                "prescribedReps": 10,
                "prescribedRpe": 10,
                "actualLoad": 132.0,
                "actualReps": 8.0,
                "loadDelta": 0,
                "repDelta": -2,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-21",
              "decision": "hold",
              "decisionScore": 140.83999999999997,
              "decisionScoreRaw": 140.83999999999997,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "c8825d20-c30f-43d6-a5fd-29103e166001",
              "outcome": {
                "sessionId": "c8825d20-c30f-43d6-a5fd-29103e166001",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 121,
                "prescribedReps": 10,
                "prescribedRpe": 10,
                "actualLoad": 121.0,
                "actualReps": 8.0,
                "loadDelta": 0,
                "repDelta": -2,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-08",
              "decision": "hold",
              "decisionScore": 158.66916666666668,
              "decisionScoreRaw": 158.66916666666668,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "c8dbc020-24f0-463c-9d8f-a3ad0011fbcf",
              "outcome": {
                "sessionId": "c8dbc020-24f0-463c-9d8f-a3ad0011fbcf",
                "behaviorClass": "matched",
                "prescribedLoad": 149,
                "prescribedReps": 10,
                "prescribedRpe": 10,
                "actualLoad": 148.5,
                "actualReps": 9.0,
                "loadDelta": 0,
                "repDelta": -1,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "date": "2026-08-07",
                "behaviorClass": "load_undershoot",
                "effectivenessScore": 0.0,
                "valid": true
              },
              {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "date": "2026-08-02",
                "behaviorClass": "matched",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "57e204c2-3cd9-433c-b8e0-e446777e5450",
                "date": "2026-07-28",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "c8825d20-c30f-43d6-a5fd-29103e166001",
                "date": "2026-07-21",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "c8dbc020-24f0-463c-9d8f-a3ad0011fbcf",
                "date": "2026-07-08",
                "behaviorClass": "matched",
                "effectivenessScore": 1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 2,
            "regressCount": 2,
            "neutralCount": 1,
            "scores": [
              0.0,
              1.0,
              -1.0,
              -1.0,
              1.0
            ]
          }
        },
        {
          "name": "Dumbbell Fly",
          "icon": "\ud83c\udfcb\ufe0f",
          "rest": "1:30",
          "cues": [
            "Stretch focus",
            "Soft elbow bend fixed",
            "2\u20133 sec eccentric",
            "No pressing motion",
            "Stop short of shoulder irritation"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 40 lb \u00d7 13 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (13/15) \u2014 earn the jump; top set 40\u219242.5; +6.2% load costs ~2 reps, so the rep target drops 13\u219211 [range 9-11]. Isolation: only loaded once the whole cluster is productive. Back-off earned its own jump too \u2014 37.5 for 13-15, rebuilding to the reps it just produced.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 25,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 22.5,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 40,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 42.5,
                "reps": "9\u201311",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 35,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": 37.5,
                "reps": "13\u201315",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-07",
              "decision": "hold",
              "decisionScore": 47.54,
              "decisionScoreRaw": 47.54,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
              "outcome": {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 42,
                "prescribedReps": 10,
                "prescribedRpe": 9,
                "actualLoad": 40.0,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 2,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-02",
              "decision": "hold",
              "decisionScore": 44.12333333333333,
              "decisionScoreRaw": 44.12333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
              "outcome": {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 40,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 40.0,
                "actualReps": 8.0,
                "loadDelta": 0,
                "repDelta": -7,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-28",
              "decision": "hold",
              "decisionScore": 47.04,
              "decisionScoreRaw": 47.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "57e204c2-3cd9-433c-b8e0-e446777e5450",
              "outcome": {
                "sessionId": "57e204c2-3cd9-433c-b8e0-e446777e5450",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 40,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 40.0,
                "actualReps": 10.0,
                "loadDelta": 0,
                "repDelta": -5,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-21",
              "decision": "hold",
              "decisionScore": 44.81777777777778,
              "decisionScoreRaw": 44.81777777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "c8825d20-c30f-43d6-a5fd-29103e166001",
              "outcome": {
                "sessionId": "c8825d20-c30f-43d6-a5fd-29103e166001",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 38,
                "prescribedReps": 10,
                "prescribedRpe": 10,
                "actualLoad": 35.0,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 2,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-08",
              "decision": "hold",
              "decisionScore": 48.79,
              "decisionScoreRaw": 48.79,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "c8dbc020-24f0-463c-9d8f-a3ad0011fbcf",
              "outcome": {
                "sessionId": "c8dbc020-24f0-463c-9d8f-a3ad0011fbcf",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 45,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 45.0,
                "actualReps": 10.0,
                "loadDelta": 0,
                "repDelta": -5,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "date": "2026-08-07",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "date": "2026-08-02",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "57e204c2-3cd9-433c-b8e0-e446777e5450",
                "date": "2026-07-28",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "c8825d20-c30f-43d6-a5fd-29103e166001",
                "date": "2026-07-21",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "c8dbc020-24f0-463c-9d8f-a3ad0011fbcf",
                "date": "2026-07-08",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 2,
            "regressCount": 3,
            "neutralCount": 0,
            "scores": [
              1.0,
              -1.0,
              -1.0,
              1.0,
              -1.0
            ]
          }
        },
        {
          "name": "Dumbbell Triceps Extension",
          "icon": "\ud83d\udd17",
          "rest": "2:00",
          "cues": [
            "Elbows fixed slightly in",
            "Full stretch behind head",
            "2\u20133 sec eccentric",
            "Pause in stretch",
            "No shoulder movement",
            "Keep tension on triceps"
          ],
          "noWeight": false,
          "loading_type": "band_combo",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 65 lb \u00d7 10 @ RPE 9 \u00b7 band_combo \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 75 lb band stack \u2014 chase reps to ~15 at RPE 9 before adding a band. Bands 50/75/100/125 stack to 50/75/100/125/150/175/200/225/250/275/300/350. Back-off holds its own last load (50) for 8-10 \u2014 it has not reached the 15-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 50,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 50.0,
                "reps": "6",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 65,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 75.0,
                "reps": "10\u201320",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 60,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 50.0,
                "reps": "8\u201310",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-07",
              "decision": "hold",
              "decisionScore": 80.70666666666668,
              "decisionScoreRaw": 80.70666666666668,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
              "outcome": {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 75,
                "prescribedReps": 20,
                "prescribedRpe": 9,
                "actualLoad": 65.0,
                "actualReps": 12.0,
                "loadDelta": -10,
                "repDelta": -8,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-02",
              "decision": "hold",
              "decisionScore": 77.81777777777778,
              "decisionScoreRaw": 77.81777777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
              "outcome": {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 75,
                "prescribedReps": 20,
                "prescribedRpe": 9,
                "actualLoad": 65.0,
                "actualReps": 8.0,
                "loadDelta": -10,
                "repDelta": -12,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-28",
              "decision": "hold",
              "decisionScore": 80.59555555555556,
              "decisionScoreRaw": 80.59555555555556,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "57e204c2-3cd9-433c-b8e0-e446777e5450",
              "outcome": {
                "sessionId": "57e204c2-3cd9-433c-b8e0-e446777e5450",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 75,
                "prescribedReps": 20,
                "prescribedRpe": 9,
                "actualLoad": 65.0,
                "actualReps": 10.0,
                "loadDelta": -10,
                "repDelta": -10,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-21",
              "decision": "hold",
              "decisionScore": 77.70666666666668,
              "decisionScoreRaw": 77.70666666666668,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "c8825d20-c30f-43d6-a5fd-29103e166001",
              "outcome": {
                "sessionId": "c8825d20-c30f-43d6-a5fd-29103e166001",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 50,
                "prescribedReps": 20,
                "prescribedRpe": 9,
                "actualLoad": 60.0,
                "actualReps": 10.0,
                "loadDelta": 10,
                "repDelta": -10,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-08",
              "decision": "hold",
              "decisionScore": 80.59555555555556,
              "decisionScoreRaw": 80.59555555555556,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "c8dbc020-24f0-463c-9d8f-a3ad0011fbcf",
              "outcome": {
                "sessionId": "c8dbc020-24f0-463c-9d8f-a3ad0011fbcf",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 75,
                "prescribedReps": 20,
                "prescribedRpe": 9,
                "actualLoad": 70.0,
                "actualReps": 10.0,
                "loadDelta": -5,
                "repDelta": -10,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "date": "2026-08-07",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "date": "2026-08-02",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "57e204c2-3cd9-433c-b8e0-e446777e5450",
                "date": "2026-07-28",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "c8825d20-c30f-43d6-a5fd-29103e166001",
                "date": "2026-07-21",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "c8dbc020-24f0-463c-9d8f-a3ad0011fbcf",
                "date": "2026-07-08",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 0,
            "regressCount": 5,
            "neutralCount": 0,
            "scores": [
              -1.0,
              -1.0,
              -1.0,
              -1.0,
              -1.0
            ]
          }
        },
        {
          "name": "Triceps Pushdown",
          "icon": "\ud83d\udd17",
          "rest": "1:30",
          "cues": [
            "Elbows pinned",
            "Full lockout",
            "Controlled return",
            "No shoulder roll",
            "Keep tension on triceps"
          ],
          "noWeight": false,
          "loading_type": "band_combo",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 300 lb \u00d7 8 @ RPE 9 \u00b7 band_combo \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 300 lb band stack \u2014 chase reps to ~15 at RPE 9 before adding a band. Bands 50/75/100/125 stack to 50/75/100/125/150/175/200/225/250/275/300/350. Back-off holds its own last load (275) for 8-10 \u2014 it has not reached the 15-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 200,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 275.0,
                "reps": "4",
                "rpe": 6.0
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 250,
                "reps": 8,
                "rpe": 6
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 300,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 300.0,
                "reps": "8\u201320",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 275,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 275.0,
                "reps": "8\u201310",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: increase (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "increase",
              "decisionScore": 360.3177777777778,
              "decisionScoreRaw": 360.3177777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
              "outcome": {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 300,
                "prescribedReps": 15,
                "prescribedRpe": 9,
                "actualLoad": 275.0,
                "actualReps": 17.0,
                "loadDelta": -25,
                "repDelta": 2,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-07",
              "decision": "increase",
              "decisionScore": 360.04,
              "decisionScoreRaw": 360.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
              "outcome": {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 300,
                "prescribedReps": 20,
                "prescribedRpe": 9,
                "actualLoad": 300.0,
                "actualReps": 12.0,
                "loadDelta": 0,
                "repDelta": -8,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-04",
              "decision": "increase",
              "decisionScore": 375.04,
              "decisionScoreRaw": 375.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
              "outcome": {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 275,
                "prescribedReps": 15,
                "prescribedRpe": 9,
                "actualLoad": 250.0,
                "actualReps": 20.0,
                "loadDelta": -25,
                "repDelta": 5,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-02",
              "decision": "increase",
              "decisionScore": 343.165,
              "decisionScoreRaw": 343.165,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
              "outcome": {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 300,
                "prescribedReps": 20,
                "prescribedRpe": 9,
                "actualLoad": 300.0,
                "actualReps": 8.0,
                "loadDelta": 0,
                "repDelta": -12,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-01",
              "decision": "increase",
              "decisionScore": 333.37333333333333,
              "decisionScoreRaw": 333.37333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
              "outcome": {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "behaviorClass": "insufficient_data",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 200.0,
                "actualReps": 20.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "date": "2026-08-08",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "date": "2026-08-07",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "date": "2026-08-04",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "date": "2026-08-02",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "date": "2026-08-01",
                "behaviorClass": "insufficient_data",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 4,
            "progressCount": 2,
            "regressCount": 2,
            "neutralCount": 0,
            "scores": [
              1.0,
              -1.0,
              1.0,
              -1.0
            ]
          }
        },
        {
          "name": "Chest Dip",
          "icon": "\ud83c\udfcb\ufe0f",
          "rest": "2:00",
          "cues": [],
          "noWeight": true,
          "loading_type": "bodyweight",
          "qc": "fail",
          "action": "review_required",
          "assess": "Last top set: reps not recorded.",
          "rationale": "<b>\u2717 QC fail: insufficient_performed_input, missing(performed_reps)</b> \u00b7 Cannot prescribe: last session's reps were not logged for this exercise. Record them and the engine resumes \u2014 no load or rep target is being asserted from missing data.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 5
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": 2,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null
        },
        {
          "name": "Dumbbell Incline Bicep Curl",
          "icon": "\ud83d\udcaa",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 22.5 lb \u00d7 12 @ RPE 9.5 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (12/15) \u2014 earn the jump; top set 22.5\u219225; +11.1% load costs ~4 reps, so the rep target drops 12\u21928 [range 6-8]. Isolation: only loaded once the whole cluster is productive. Back-off earned its own jump too \u2014 22.5 for 13-15, rebuilding to the reps it just produced.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null
              },
              "prop": {
                "lbs": 15,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null
              },
              "prop": {
                "lbs": 25,
                "reps": "6\u20138",
                "rpe": 9.5
              }
            },
            {
              "type": 1,
              "last": {
                "lbs": 15,
                "reps": 15,
                "rpe": 6
              },
              "prop": {
                "lbs": 22.5,
                "reps": "13\u201315",
                "rpe": 9.0
              }
            },
            {
              "type": 2,
              "last": {
                "lbs": 22.5,
                "reps": 12,
                "rpe": 9.5
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 20,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 37.151111111111106,
              "decisionScoreRaw": 37.151111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
              "outcome": {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 32,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 32.5,
                "actualReps": 10.0,
                "loadDelta": 0,
                "repDelta": -5,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-07",
              "decision": "hold",
              "decisionScore": 28.31777777777778,
              "decisionScoreRaw": 28.31777777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
              "outcome": {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 25,
                "prescribedReps": 10,
                "prescribedRpe": 10,
                "actualLoad": 22.5,
                "actualReps": 14.0,
                "loadDelta": -2,
                "repDelta": 4,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 35.151111111111106,
              "decisionScoreRaw": 35.151111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
              "outcome": {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 32,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 30.0,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 3,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 36.59555555555555,
              "decisionScoreRaw": 36.59555555555555,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
              "outcome": {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 32,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 30.0,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 3,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 34.51222222222222,
              "decisionScoreRaw": 34.51222222222222,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
              "outcome": {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 30,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 30.0,
                "actualReps": 11.0,
                "loadDelta": 0,
                "repDelta": -4,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "date": "2026-08-08",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "date": "2026-08-07",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "date": "2026-08-06",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "date": "2026-08-04",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "date": "2026-08-01",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 3,
            "regressCount": 2,
            "neutralCount": 0,
            "scores": [
              -1.0,
              1.0,
              1.0,
              1.0,
              -1.0
            ]
          }
        },
        {
          "name": "Seated Lateral Raise",
          "icon": "\ud83d\uded7",
          "rest": "1:30",
          "cues": [
            "Lead with elbows",
            "Stop if traps take over",
            "2\u20133 sec eccentric",
            "No torso swing",
            "Constant tension"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "fail",
          "action": "review_required",
          "assess": "Last top set: load and reps not recorded.",
          "rationale": "<b>\u2717 QC fail: insufficient_performed_input, missing(performed_reps), missing(performed_load)</b> \u00b7 Cannot prescribe: last session's load and reps were not logged for this exercise. Record them and the engine resumes \u2014 no load or rep target is being asserted from missing data.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 7
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": "Day C (delts/abs) also trains delts (the logged Day C session on 2026-08-15). This exercise's own recovery estimate (52h, stretch stimulus, moderate fatigue) extends to 2026-08-17, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 29.810833333333335,
              "decisionScoreRaw": 29.810833333333335,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
              "outcome": {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 28,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 25.0,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 3,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 22.54,
              "decisionScoreRaw": 22.54,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
              "outcome": {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "behaviorClass": "insufficient_data",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 15.0,
                "actualReps": 15.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 27.006666666666668,
              "decisionScoreRaw": 27.006666666666668,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
              "outcome": {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 25,
                "prescribedReps": 8,
                "prescribedRpe": 9,
                "actualLoad": 22.5,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 4,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-02",
              "decision": "hold",
              "decisionScore": 20.87333333333333,
              "decisionScoreRaw": 20.87333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
              "outcome": {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "behaviorClass": "insufficient_data",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 12.5,
                "actualReps": 20.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 22.04,
              "decisionScoreRaw": 22.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
              "outcome": {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 18,
                "prescribedReps": 9,
                "prescribedRpe": 10,
                "actualLoad": 15.0,
                "actualReps": 15.0,
                "loadDelta": -2,
                "repDelta": 6,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "date": "2026-08-08",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "date": "2026-08-06",
                "behaviorClass": "insufficient_data",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "date": "2026-08-04",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "date": "2026-08-02",
                "behaviorClass": "insufficient_data",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "date": "2026-08-01",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              }
            ],
            "validCount": 3,
            "progressCount": 3,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": [
              1.0,
              1.0,
              1.0
            ]
          }
        }
      ],
      "sequencingAdvisory": "\"Dumbbell Fly\" (isolation/accessory) is displayed before \"Chest Dip\" (a major/compound movement) -- major movements are usually sequenced first so accessory fatigue doesn't compromise them. ASSUMPTION, not a confirmed defect: this reflects the displayed/template order the session was logged in, not verified execution order -- VOLM logs no per-set/per-group timestamps, only session-level start/end times."
    },
    {
      "day": "A",
      "title": "DAY A \u2014 BACK / BICEPS (4-5 days)",
      "date": "2026-08-13",
      "prevDate": "2026-08-06",
      "nextAvailable": {
        "earliest": "2026-08-16",
        "latest": "2026-08-17",
        "fatigue_state": "high",
        "driver": "back recovery (heavy stimulus, high fatigue, ~92h)"
      },
      "stats": [
        "70m",
        "16 sets",
        "8.9k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY A \u2014 BACK / BICEPS (4-5 days) \u2014 0 load\u2191 \u00b7 5 rep\u2191 \u00b7 0 hold.",
        "assess": "8 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>5/8</b> prescriptions passed the validation gate; <b>3 flagged</b> \u2014 see the \u2717 tags below."
      },
      "exercises": [
        {
          "name": "Assisted Pull Up",
          "icon": "\ud83d\udea3",
          "rest": "3:00",
          "cues": [
            "Full ROM",
            "Stretch at bottom",
            "Chest up",
            "Drive elbows down",
            "No kipping",
            "Reduce assistance before adding reps if reps stall"
          ],
          "noWeight": false,
          "loading_type": "band_assisted_bodyweight",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 175 assist \u00d7 12 @ RPE 9 \u00b7 band_assisted_bodyweight \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 175 lb assist \u2014 build toward 15 reps before reducing assistance. Bands 50/75/100/125 stack to 50/75/100/125/150/175/200/225/250/275/300/350 (less assist = harder). Back-off holds its own last load (200) for 8-10 \u2014 it has not reached the 15-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 225,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 225.0,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 200,
                "reps": 8,
                "rpe": 6
              },
              "prop": {
                "lbs": 200.0,
                "reps": "8",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 175,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 175.0,
                "reps": "12\u201315",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 200,
                "reps": 7,
                "rpe": 9
              },
              "prop": {
                "lbs": 200.0,
                "reps": "8\u201310",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 32.95666666666666,
              "decisionScoreRaw": 32.95666666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
              "outcome": {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 175,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 225.0,
                "actualReps": 8.0,
                "loadDelta": 50,
                "repDelta": -7,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 33.37333333333333,
              "decisionScoreRaw": 33.37333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
              "outcome": {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 175,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 225.0,
                "actualReps": 8.0,
                "loadDelta": 50,
                "repDelta": -7,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-26",
              "decision": "hold",
              "decisionScore": 32.33166666666666,
              "decisionScoreRaw": 32.33166666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
              "outcome": {
                "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 175,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 225.0,
                "actualReps": 8.0,
                "loadDelta": 50,
                "repDelta": -7,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-20",
              "decision": "hold",
              "decisionScore": 65.04,
              "decisionScoreRaw": 65.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
              "outcome": {
                "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 175,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 175.0,
                "actualReps": 10.0,
                "loadDelta": 0,
                "repDelta": -5,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-07",
              "decision": "hold",
              "decisionScore": 95.45666666666666,
              "decisionScoreRaw": 95.45666666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
              "outcome": {
                "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 125,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 175.0,
                "actualReps": 8.0,
                "loadDelta": 50,
                "repDelta": -7,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "date": "2026-08-06",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "date": "2026-08-01",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
                "date": "2026-07-26",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
                "date": "2026-07-20",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
                "date": "2026-07-07",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 0,
            "regressCount": 5,
            "neutralCount": 0,
            "scores": [
              -1.0,
              -1.0,
              -1.0,
              -1.0,
              -1.0
            ]
          }
        },
        {
          "name": "Barbell Bent Over Row",
          "icon": "\ud83d\udea3",
          "rest": "3:00",
          "cues": [
            "Stable torso",
            "Pull to low chest / upper abs",
            "No jerking",
            "Control eccentric",
            "Do not turn it into a hip hinge shrug"
          ],
          "noWeight": false,
          "loading_type": "barbell",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 143 lb \u00d7 9 @ RPE 10 \u00b7 barbell \u00b7 anchor 10 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 143.3 \u2014 reps below anchor; chase reps to ~10 at RPE 9 before adding load. Back-off holds its own last load (132.3) for 9-10 \u2014 it has not reached the 10-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 88,
                "reps": 10,
                "rpe": 5
              },
              "prop": {
                "lbs": 77.2,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 115.5,
                "reps": 8,
                "rpe": 6
              },
              "prop": {
                "lbs": 115.7,
                "reps": "5",
                "rpe": 6.5
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 143,
                "reps": 9,
                "rpe": 10
              },
              "prop": {
                "lbs": 143.3,
                "reps": "9\u201310",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 132,
                "reps": 9,
                "rpe": 9
              },
              "prop": {
                "lbs": 132.3,
                "reps": "9\u201310",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 150.19,
              "decisionScoreRaw": 150.19,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
              "outcome": {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 143,
                "prescribedReps": 10,
                "prescribedRpe": 10,
                "actualLoad": 143.0,
                "actualReps": 8.0,
                "loadDelta": 0,
                "repDelta": -2,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 146.5233333333333,
              "decisionScoreRaw": 146.5233333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
              "outcome": {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "behaviorClass": "load_undershoot",
                "prescribedLoad": 138,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 132.0,
                "actualReps": 10.0,
                "loadDelta": -6,
                "repDelta": 1,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-26",
              "decision": "hold",
              "decisionScore": 145.42333333333332,
              "decisionScoreRaw": 145.42333333333332,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
              "outcome": {
                "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
                "behaviorClass": "matched",
                "prescribedLoad": 132,
                "prescribedReps": 10,
                "prescribedRpe": 10,
                "actualLoad": 132.0,
                "actualReps": 9.0,
                "loadDelta": 0,
                "repDelta": -1,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-20",
              "decision": "hold",
              "decisionScore": 147.80666666666664,
              "decisionScoreRaw": 147.80666666666664,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
              "outcome": {
                "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 132,
                "prescribedReps": 10,
                "prescribedRpe": 10,
                "actualLoad": 132.0,
                "actualReps": 8.0,
                "loadDelta": 0,
                "repDelta": -2,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-07",
              "decision": "hold",
              "decisionScore": 163.64666666666668,
              "decisionScoreRaw": 163.64666666666668,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
              "outcome": {
                "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 154,
                "prescribedReps": 10,
                "prescribedRpe": 10,
                "actualLoad": 154.0,
                "actualReps": 7.0,
                "loadDelta": 0,
                "repDelta": -3,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "date": "2026-08-06",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "date": "2026-08-01",
                "behaviorClass": "load_undershoot",
                "effectivenessScore": 0.0,
                "valid": true
              },
              {
                "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
                "date": "2026-07-26",
                "behaviorClass": "matched",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
                "date": "2026-07-20",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
                "date": "2026-07-07",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 1,
            "regressCount": 3,
            "neutralCount": 1,
            "scores": [
              -1.0,
              0.0,
              1.0,
              -1.0,
              -1.0
            ]
          }
        },
        {
          "name": "Dumbbell Incline Bicep Curl",
          "icon": "\ud83d\udcaa",
          "rest": "2:00",
          "cues": [
            "Full stretch with shoulder extended",
            "Elbows fixed",
            "Supinate hard at top",
            "2\u20133 sec eccentric",
            "No shoulder movement"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 35 lb \u00d7 10 @ RPE 8 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 35 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (35) for 11-13 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 20,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 20,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null
              },
              "prop": {
                "lbs": 35,
                "reps": "10\u201315",
                "rpe": 9.5
              }
            },
            {
              "type": 2,
              "last": {
                "lbs": 35,
                "reps": 10,
                "rpe": 8
              },
              "prop": {
                "lbs": 35,
                "reps": "11\u201313",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 35,
                "reps": 11,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": "Day B (chest/arms) also trains arms (the logged Day B session on 2026-08-14). This exercise's own recovery estimate (50h, stretch stimulus, moderate fatigue) extends to 2026-08-16, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 37.151111111111106,
              "decisionScoreRaw": 37.151111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
              "outcome": {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 32,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 32.5,
                "actualReps": 10.0,
                "loadDelta": 0,
                "repDelta": -5,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-07",
              "decision": "hold",
              "decisionScore": 28.31777777777778,
              "decisionScoreRaw": 28.31777777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
              "outcome": {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 25,
                "prescribedReps": 10,
                "prescribedRpe": 10,
                "actualLoad": 22.5,
                "actualReps": 14.0,
                "loadDelta": -2,
                "repDelta": 4,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 35.151111111111106,
              "decisionScoreRaw": 35.151111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
              "outcome": {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 32,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 30.0,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 3,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 36.59555555555555,
              "decisionScoreRaw": 36.59555555555555,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
              "outcome": {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 32,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 30.0,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 3,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 34.51222222222222,
              "decisionScoreRaw": 34.51222222222222,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
              "outcome": {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 30,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 30.0,
                "actualReps": 11.0,
                "loadDelta": 0,
                "repDelta": -4,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "date": "2026-08-08",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "date": "2026-08-07",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "date": "2026-08-06",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "date": "2026-08-04",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "date": "2026-08-01",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 3,
            "regressCount": 2,
            "neutralCount": 0,
            "scores": [
              -1.0,
              1.0,
              1.0,
              1.0,
              -1.0
            ]
          }
        },
        {
          "name": "Dumbbell One Arm Row",
          "icon": "\ud83d\udea3",
          "rest": "3:00",
          "cues": [
            "Stretch at bottom",
            "Drive elbow back",
            "No torso rotation",
            "Keep ribcage locked",
            "Control lowering"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 75 lb \u00d7 10 @ RPE 10 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 75 \u2014 reps below anchor; chase reps to ~12 at RPE 9 before adding load. Back-off holds its own last load (65) for 11-12 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 40,
                "reps": 13,
                "rpe": 5
              },
              "prop": {
                "lbs": 40,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 60,
                "reps": 13,
                "rpe": 6
              },
              "prop": {
                "lbs": 60,
                "reps": "5",
                "rpe": 6.5
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 75,
                "reps": 10,
                "rpe": 10
              },
              "prop": {
                "lbs": 75,
                "reps": "10\u201312",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 65,
                "reps": 11,
                "rpe": 9
              },
              "prop": {
                "lbs": 65,
                "reps": "11\u201312",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 74.70666666666666,
              "decisionScoreRaw": 74.70666666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
              "outcome": {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 75,
                "prescribedReps": 11,
                "prescribedRpe": 9,
                "actualLoad": 70.0,
                "actualReps": 13.0,
                "loadDelta": -5,
                "repDelta": 2,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 72.04,
              "decisionScoreRaw": 72.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
              "outcome": {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "behaviorClass": "load_undershoot",
                "prescribedLoad": 68,
                "prescribedReps": 12,
                "prescribedRpe": 9,
                "actualLoad": 65.0,
                "actualReps": 13.0,
                "loadDelta": -2,
                "repDelta": 1,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-26",
              "decision": "hold",
              "decisionScore": 69.58166666666666,
              "decisionScoreRaw": 69.58166666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
              "outcome": {
                "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
                "behaviorClass": "matched",
                "prescribedLoad": 65,
                "prescribedReps": 12,
                "prescribedRpe": 10,
                "actualLoad": 65.0,
                "actualReps": 11.0,
                "loadDelta": 0,
                "repDelta": -1,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-20",
              "decision": "hold",
              "decisionScore": 75.31777777777778,
              "decisionScoreRaw": 75.31777777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
              "outcome": {
                "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
                "behaviorClass": "load_undershoot",
                "prescribedLoad": 62,
                "prescribedReps": 11,
                "prescribedRpe": 10,
                "actualLoad": 60.0,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 1,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-07",
              "decision": "hold",
              "decisionScore": 84.8525,
              "decisionScoreRaw": 84.8525,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
              "outcome": {
                "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 75,
                "prescribedReps": 13,
                "prescribedRpe": 10,
                "actualLoad": 75.0,
                "actualReps": 11.0,
                "loadDelta": 0,
                "repDelta": -2,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "date": "2026-08-06",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "date": "2026-08-01",
                "behaviorClass": "load_undershoot",
                "effectivenessScore": 0.0,
                "valid": true
              },
              {
                "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
                "date": "2026-07-26",
                "behaviorClass": "matched",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
                "date": "2026-07-20",
                "behaviorClass": "load_undershoot",
                "effectivenessScore": 0.0,
                "valid": true
              },
              {
                "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
                "date": "2026-07-07",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 2,
            "regressCount": 1,
            "neutralCount": 2,
            "scores": [
              1.0,
              0.0,
              1.0,
              0.0,
              -1.0
            ]
          }
        },
        {
          "name": "Dumbbell Cross Body Hammer Curl",
          "icon": "\ud83d\udcaa",
          "rest": "2:00",
          "cues": [
            "Neutral grip fixed",
            "Elbow slightly forward",
            "No torso swing",
            "Control eccentric",
            "Keep tension on brachialis"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 32.5 lb \u00d7 10 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 32.5 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (30) for 12-14 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 17.5,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 17.5,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null
              },
              "prop": {
                "lbs": 32.5,
                "reps": "10\u201315",
                "rpe": 9.5
              }
            },
            {
              "type": 2,
              "last": {
                "lbs": 32.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 30,
                "reps": "12\u201314",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 30,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": "Day B (chest/arms) also trains arms (the logged Day B session on 2026-08-14). This exercise's own recovery estimate (50h, stretch stimulus, moderate fatigue) extends to 2026-08-16, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 34.428888888888885,
              "decisionScoreRaw": 34.428888888888885,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
              "outcome": {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 30,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 27.5,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 3,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 33.98444444444444,
              "decisionScoreRaw": 33.98444444444444,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
              "outcome": {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 30,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 30.0,
                "actualReps": 9.0,
                "loadDelta": 0,
                "repDelta": -6,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-26",
              "decision": "hold",
              "decisionScore": 34.59555555555555,
              "decisionScoreRaw": 34.59555555555555,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
              "outcome": {
                "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 30,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 30.0,
                "actualReps": 9.0,
                "loadDelta": 0,
                "repDelta": -6,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-20",
              "decision": "hold",
              "decisionScore": 39.54,
              "decisionScoreRaw": 39.54,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
              "outcome": {
                "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 30,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 30.0,
                "actualReps": 10.0,
                "loadDelta": 0,
                "repDelta": -5,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-07-07",
              "decision": "hold",
              "decisionScore": 41.54,
              "decisionScoreRaw": 41.54,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
              "outcome": {
                "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 40,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 40.0,
                "actualReps": 7.0,
                "loadDelta": 0,
                "repDelta": -8,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "date": "2026-08-06",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "date": "2026-08-01",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "70b9c6ee-293e-4eba-9421-ca3002988cd8",
                "date": "2026-07-26",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "3c08afdb-62a6-42ed-b41c-79e3df8b43a9",
                "date": "2026-07-20",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "b3d2830d-353e-4574-a55f-73a81a60c08e",
                "date": "2026-07-07",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 1,
            "regressCount": 4,
            "neutralCount": 0,
            "scores": [
              1.0,
              -1.0,
              -1.0,
              -1.0,
              -1.0
            ]
          }
        },
        {
          "name": "Cable Crunch",
          "icon": "\ud83c\udf00",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "fail",
          "action": "review_required",
          "assess": "Last top set: load and reps not recorded.",
          "rationale": "<b>\u2717 QC fail: insufficient_performed_input, missing(performed_reps), missing(performed_load)</b> \u00b7 Cannot prescribe: last session's load and reps were not logged for this exercise. Record them and the engine resumes \u2014 no load or rep target is being asserted from missing data.",
          "sets": [
            {
              "type": 1,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null
        },
        {
          "name": "Seated Lateral Raise",
          "icon": "\ud83d\uded7",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "fail",
          "action": "review_required",
          "assess": "Last top set: load and reps not recorded.",
          "rationale": "<b>\u2717 QC fail: insufficient_performed_input, missing(performed_reps), missing(performed_load)</b> \u00b7 Cannot prescribe: last session's load and reps were not logged for this exercise. Record them and the engine resumes \u2014 no load or rep target is being asserted from missing data.",
          "sets": [
            {
              "type": 1,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": 2,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: hold (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "hold",
              "decisionScore": 29.810833333333335,
              "decisionScoreRaw": 29.810833333333335,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
              "outcome": {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 28,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 25.0,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 3,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-06",
              "decision": "hold",
              "decisionScore": 22.54,
              "decisionScoreRaw": 22.54,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
              "outcome": {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "behaviorClass": "insufficient_data",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 15.0,
                "actualReps": 15.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-04",
              "decision": "hold",
              "decisionScore": 27.006666666666668,
              "decisionScoreRaw": 27.006666666666668,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
              "outcome": {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 25,
                "prescribedReps": 8,
                "prescribedRpe": 9,
                "actualLoad": 22.5,
                "actualReps": 12.0,
                "loadDelta": -2,
                "repDelta": 4,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-02",
              "decision": "hold",
              "decisionScore": 20.87333333333333,
              "decisionScoreRaw": 20.87333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
              "outcome": {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "behaviorClass": "insufficient_data",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 12.5,
                "actualReps": 20.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-01",
              "decision": "hold",
              "decisionScore": 22.04,
              "decisionScoreRaw": 22.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
              "outcome": {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 18,
                "prescribedReps": 9,
                "prescribedRpe": 10,
                "actualLoad": 15.0,
                "actualReps": 15.0,
                "loadDelta": -2,
                "repDelta": 6,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "date": "2026-08-08",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "b94c8f20-783f-459f-a7b8-de3d6aa12f4e",
                "date": "2026-08-06",
                "behaviorClass": "insufficient_data",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "date": "2026-08-04",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "date": "2026-08-02",
                "behaviorClass": "insufficient_data",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "date": "2026-08-01",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              }
            ],
            "validCount": 3,
            "progressCount": 3,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": [
              1.0,
              1.0,
              1.0
            ]
          }
        },
        {
          "name": "Triceps Pushdown",
          "icon": "\ud83d\udd17",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "band_combo",
          "qc": "fail",
          "action": "review_required",
          "assess": "Last top set: load and reps not recorded.",
          "rationale": "<b>\u2717 QC fail: insufficient_performed_input, missing(performed_reps), missing(performed_load)</b> \u00b7 Cannot prescribe: last session's load and reps were not logged for this exercise. Record them and the engine resumes \u2014 no load or rep target is being asserted from missing data.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 5
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": 2,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: increase (fresh) \u2014 no change needed",
          "recoveryOverlapWarning": "Day B (chest/arms) also trains arms (the logged Day B session on 2026-08-14). This exercise's own recovery estimate (38h, volume stimulus, moderate fatigue) extends to 2026-08-15, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-08",
              "decision": "increase",
              "decisionScore": 360.3177777777778,
              "decisionScoreRaw": 360.3177777777778,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
              "outcome": {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 300,
                "prescribedReps": 15,
                "prescribedRpe": 9,
                "actualLoad": 275.0,
                "actualReps": 17.0,
                "loadDelta": -25,
                "repDelta": 2,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-07",
              "decision": "increase",
              "decisionScore": 360.04,
              "decisionScoreRaw": 360.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
              "outcome": {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 300,
                "prescribedReps": 20,
                "prescribedRpe": 9,
                "actualLoad": 300.0,
                "actualReps": 12.0,
                "loadDelta": 0,
                "repDelta": -8,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-04",
              "decision": "increase",
              "decisionScore": 375.04,
              "decisionScoreRaw": 375.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
              "outcome": {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 275,
                "prescribedReps": 15,
                "prescribedRpe": 9,
                "actualLoad": 250.0,
                "actualReps": 20.0,
                "loadDelta": -25,
                "repDelta": 5,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-02",
              "decision": "increase",
              "decisionScore": 343.165,
              "decisionScoreRaw": 343.165,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
              "outcome": {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 300,
                "prescribedReps": 20,
                "prescribedRpe": 9,
                "actualLoad": 300.0,
                "actualReps": 8.0,
                "loadDelta": 0,
                "repDelta": -12,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-01",
              "decision": "increase",
              "decisionScore": 333.37333333333333,
              "decisionScoreRaw": 333.37333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
              "outcome": {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "behaviorClass": "insufficient_data",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 200.0,
                "actualReps": 20.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "date": "2026-08-08",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "08281521-4301-4e9f-a87c-66239a23ca27",
                "date": "2026-08-07",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "date": "2026-08-04",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "3226c4ae-fc59-404a-8d28-2a6cf4de09e5",
                "date": "2026-08-02",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "552fcbb2-d6ea-477b-bada-fd2a6a8c2946",
                "date": "2026-08-01",
                "behaviorClass": "insufficient_data",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 4,
            "progressCount": 2,
            "regressCount": 2,
            "neutralCount": 0,
            "scores": [
              1.0,
              -1.0,
              1.0,
              -1.0
            ]
          }
        }
      ],
      "sequencingAdvisory": "\"Dumbbell Incline Bicep Curl\" (isolation/accessory) is displayed before \"Dumbbell One Arm Row\" (a major/compound movement) -- major movements are usually sequenced first so accessory fatigue doesn't compromise them. ASSUMPTION, not a confirmed defect: this reflects the displayed/template order the session was logged in, not verified execution order -- VOLM logs no per-set/per-group timestamps, only session-level start/end times."
    }
  ]
};
