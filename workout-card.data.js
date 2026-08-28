window.PROGRAM = {
  "author": "C Crawford",
  "avatar": "",
  "sessions": [
    {
      "day": "A",
      "title": "DAY A \u2014 BACK / BICEPS (4-5 days)",
      "date": "2026-08-26",
      "prevDate": "2026-08-22",
      "nextAvailable": {
        "earliest": "2026-08-30",
        "latest": "2026-08-31",
        "fatigue_state": "elevated",
        "driver": "back recovery (heavy stimulus, elevated fatigue, ~86h)"
      },
      "fatigueAdvisory": {
        "fatigue_taxonomy": {
          "systemic": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "local": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "short_term",
            "adaptive_impact": "regional"
          },
          "neural": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "metabolic": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "acute",
            "adaptive_impact": "regional"
          },
          "structural": {
            "recovery_complexity": "very_high",
            "suppression_risk": "high",
            "persistence_profile": "long_term",
            "adaptive_impact": "local"
          }
        },
        "session_id": null,
        "generated_at": "2026-08-27T20:34:03.795498",
        "fatigue_signal": {
          "barbell_bent_over_row": 1.2744090432715622,
          "barbell_incline_bench_press": 0.8602555732340624,
          "bent over row barbell": 1.4772269376808442,
          "chest dip assisted": 0.9375,
          "chest fly dumbbell": 0.5169774553559345,
          "cross body hammer curl dumbbell": 0.43099854511344077,
          "incline bench press barbell": 1.6179993072553596,
          "incline bicep curl dumbbell": 0.595482476519437,
          "lateral raise band": 1.1827878018414533,
          "lateral raise dumbbell": 0.09,
          "one arm row dumbbell": 0.9456078713339864,
          "pull up assisted": 5.029428931467078,
          "rear_dumbbell_raise": 0.3075557113106938,
          "reverse fly dumbbell": 0.09,
          "seated_lateral_raise": 0.6503356969717105,
          "triceps extension dumbbell": 0.768638051992814,
          "triceps_pushdown": 5.533702580119798
        },
        "fatigue_accumulation": {
          "session_id": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
          "session_date": "2026-08-26",
          "global_fatigue_score": 9.129080459086497,
          "upper_fatigue": 4.5645402295432485,
          "lower_fatigue": 4.5645402295432485,
          "fatigue_trend_3": 8.2530529901183,
          "fatigue_trend_5": 7.038211585810371,
          "recovery_debt": 13.230720336848501
        },
        "deload_state": {
          "snapshot_date": "2026-08-27",
          "deload_flag": true,
          "pre_deload_flag": false,
          "trigger_type": "fatigue",
          "fatigue_trigger": 9.129080459086497,
          "regression_trigger": 0.6470588235294118,
          "cooldown_sessions": 3
        },
        "deload_signal_secondary": null,
        "stimulus_fatigue": null,
        "advisory_decision": null,
        "anomalies": null,
        "component_status": {
          "fatigue_taxonomy": "ok",
          "fatigue_accumulation": "ok",
          "fatigue_signal": "ok",
          "exercise_response_state": "ok",
          "deload_state": "ok"
        },
        "is_advisory": true
      },
      "stats": [
        "69m",
        "17 sets",
        "9.7k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY A \u2014 BACK / BICEPS (4-5 days) \u2014 1 load\u2191 \u00b7 2 rep\u2191 \u00b7 2 hold.",
        "assess": "8 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>6/8</b> prescriptions passed the validation gate; <b>2 flagged</b> \u2014 see the \u2717 tags below."
      },
      "exercises": [
        {
          "name": "Pull Up (Assisted)",
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
          "assess": "Last top set: 175 assist \u00d7 11 @ RPE 9 \u00b7 band_assisted_bodyweight \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 175 lb assist \u2014 build toward 15 reps before reducing assistance. Bands 50/75/100/125 stack to 50/75/100/125/150/175/200/225/250/275/300/350 (less assist = harder). Back-off holds its own last load (200) for 8-10 \u2014 it has not reached the 15-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 15 clean reps with 175 lb assistance at RPE 10 or lower; then reduce assistance to 150 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 220,
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
                "rpe": 9
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
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": "Would lower top RPE target 9 -> 8.75 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
        },
        {
          "name": "Bent Over Row (Barbell)",
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
          "assess": "Last top set: 148 lb \u00d7 8 @ RPE 9 \u00b7 barbell \u00b7 anchor 10 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 148.8 \u2014 reps below anchor; chase reps to ~10 at RPE 9 before adding load. Back-off holds its own last load (132.3) for 10 \u2014 it has not reached the 10-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 10 clean reps at 148 lb at RPE 10 or lower; then increase to 154.3 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 80,
                "reps": 8,
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
                "lbs": 121,
                "reps": 5,
                "rpe": 6
              },
              "prop": {
                "lbs": 121.3,
                "reps": "5",
                "rpe": 6.5
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 148,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 148.8,
                "reps": "8\u201310",
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
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": "Would lower top RPE target 9 -> 8.75 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
        },
        {
          "name": "Incline Bicep Curl (Dumbbell)",
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
          "action": "increase_load",
          "assess": "Last top set: 35 lb \u00d7 12 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (12/10) \u2014 earn the jump; top set 35\u219237.5; +7.1% load costs ~2 reps, so the rep target drops 12\u219210 [range 8-10]. Isolation: only loaded once the whole cluster is productive. Back-off holds its own last load (32.5) for 10-12 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 12 clean reps at 35 lb at RPE 9.5 or lower; then increase to 37.5 lb.",
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
                "lbs": 35,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 37.5,
                "reps": "8\u201310",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 32.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 32.5,
                "reps": "10\u201312",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": "Day B (chest/arms) also trains arms (assumed next-day spacing, not a logged session). This exercise's own recovery estimate (50h, stretch stimulus, moderate fatigue) extends to 2026-08-29, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": "Would lower top RPE target 9 -> 8.75 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
        },
        {
          "name": "One Arm Row (Dumbbell)",
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
          "action": "hold",
          "assess": "Last top set: 75 lb \u00d7 12 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 75 \u2014 backoffs not yet productive; chase reps to ~12 at RPE 9 before adding load. Back-off holds its own last load (72.5) for 10-12 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 12 clean reps at 75 lb at RPE 10 or lower; then increase to 80 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 45,
                "reps": 8,
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
                "lbs": 65,
                "reps": 5,
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
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 75,
                "reps": "12",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 72.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 72.5,
                "reps": "10\u201312",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": "Would lower top RPE target 9 -> 8.75 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
        },
        {
          "name": "Cross Body Hammer Curl (Dumbbell)",
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
          "assess": "Last top set: 35 lb \u00d7 12 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 35 \u2014 backoffs not yet productive; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (32.5) for 9-11 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 12 clean reps at 35 lb at RPE 9.5 or lower; then increase to 37.5 lb.",
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
                "lbs": 35,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 35,
                "reps": "12\u201315",
                "rpe": 9.5
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 32.5,
                "reps": 9,
                "rpe": 9
              },
              "prop": {
                "lbs": 32.5,
                "reps": "9\u201311",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": "Day B (chest/arms) also trains arms (assumed next-day spacing, not a logged session). This exercise's own recovery estimate (50h, stretch stimulus, moderate fatigue) extends to 2026-08-29, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": "Would lower top RPE target 9.5 -> 9.25 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
        },
        {
          "name": "Seated Lateral Raise",
          "icon": "\ud83d\uded7",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "bloodflow",
          "assess": "Most recent primary session: 30 lb \u00d7 11 @ RPE 9, 25 lb \u00d7 13 @ RPE 9, and 22.5 lb \u00d7 15 @ RPE 9 on 2026-08-25. Today's Day A occurrence is classified as a blood-flow/recovery exposure.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Blood-flow/recovery exposure \u2014 Seated Lateral Raise received its primary progression work on 2026-08-25. Prescribe 15 lb \u00d7 8 @ RPE 5, 20 lb \u00d7 20 @ RPE 7 maximum, and 17.5 lb \u00d7 20 @ RPE 7 maximum. Stop each working set at 20 reps or RPE 7, whichever occurs first. Today's performance is excluded from primary progression decisions. The primary progression remains 30 lb \u00d7 12 clean reps at RPE 9.5 or lower before increasing to 32.5 lb.",
          "when_to_add_load": "Reach 12 clean reps at 30 lb at RPE 9.5 or lower; then increase to 32.5 lb.",
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
                "lbs": 20,
                "reps": "20",
                "rpe": 7.0
              }
            },
            {
              "type": 1,
              "last": {
                "lbs": 15,
                "reps": 8,
                "rpe": null
              },
              "prop": {
                "lbs": 17.5,
                "reps": "20",
                "rpe": 7.0
              }
            },
            {
              "type": 2,
              "last": {
                "lbs": 20,
                "reps": 20,
                "rpe": 7
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
                "lbs": 17.5,
                "reps": 15,
                "rpe": 7
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "not_gated",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": "Would lower top RPE target 7 -> 6.75 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [
            {
              "date": "2026-08-21",
              "decision": "hold",
              "decisionScore": 31.1025,
              "decisionScoreRaw": 31.1025,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "6e91840d-be60-4550-9c3f-049e3836415f",
              "outcome": null
            },
            {
              "date": "2026-08-18",
              "decision": "hold",
              "decisionScore": 36.70666666666666,
              "decisionScoreRaw": 36.70666666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "cc38656e-1a35-4716-836a-223db66a862e",
              "outcome": null
            },
            {
              "date": "2026-08-15",
              "decision": "hold",
              "decisionScore": 30.27333333333333,
              "decisionScoreRaw": 30.27333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "641a1853-7827-45ff-b9b9-6347daf5e5fe",
              "outcome": null
            },
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
          },
          "occurrenceRole": "bloodflow_recovery",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "f308cefb-9b0e-4481-acbd-1617a58bac3e",
            "date": "2026-08-25",
            "sets": [
              {
                "lbs": 15.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 30.0,
                "reps": 11,
                "rpe": 9.0
              },
              {
                "lbs": 25.0,
                "reps": 13,
                "rpe": 9.0
              },
              {
                "lbs": 22.5,
                "reps": 15,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Most recent primary-shaped exposure was 2026-08-25 (24h ago) -- within the 48h blood-flow window."
          ]
        },
        {
          "name": "Crunch (Cable)",
          "icon": "\ud83c\udf00",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "fail",
          "action": "review_required",
          "assess": "Last top set: load and reps not recorded.",
          "rationale": "<b>\u2717 QC fail: insufficient_performed_input, missing(performed_reps), missing(performed_load)</b> \u00b7 Cannot prescribe: last session's load and reps were not logged for this exercise. Record them and the engine resumes \u2014 no load or rep target is being asserted from missing data.",
          "when_to_add_load": "Progression criterion unavailable until a valid working set is logged.",
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
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
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
          "when_to_add_load": "Progression criterion unavailable until a valid working set is logged.",
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
          "gate_reason": "next_program: increase (fresh, cohort signal only \u2014 per-exercise gate governs the actual load)",
          "recoveryOverlapWarning": "Day B (chest/arms) also trains arms (assumed next-day spacing, not a logged session). This exercise's own recovery estimate (38h, volume stimulus, moderate fatigue) extends to 2026-08-28, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-19",
              "decision": "increase",
              "decisionScore": 338.58166666666665,
              "decisionScoreRaw": 338.58166666666665,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "1c95db48-1b09-4a28-b993-5b31f437de12",
              "outcome": null
            },
            {
              "date": "2026-08-15",
              "decision": "increase",
              "decisionScore": 359.20666666666665,
              "decisionScoreRaw": 359.20666666666665,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "641a1853-7827-45ff-b9b9-6347daf5e5fe",
              "outcome": null
            },
            {
              "date": "2026-08-14",
              "decision": "increase",
              "decisionScore": 336.29,
              "decisionScoreRaw": 336.29,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "015cf079-c86d-43d0-b9d1-005d9e98f0a2",
              "outcome": null
            },
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
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
        }
      ],
      "sequencingAdvisory": "\"Incline Bicep Curl (Dumbbell)\" (isolation/accessory) is displayed before \"One Arm Row (Dumbbell)\" (a major/compound movement) -- major movements are usually sequenced first so accessory fatigue doesn't compromise them. ASSUMPTION, not a confirmed defect: this reflects the displayed/template order the session was logged in, not verified execution order -- VOLM logs no per-set/per-group timestamps, only session-level start/end times."
    },
    {
      "day": "C",
      "title": "DAY C \u2014 DELTS / ABS (3-4 days)",
      "date": "2026-08-25",
      "prevDate": "2026-08-21",
      "nextAvailable": {
        "earliest": "2026-08-29",
        "latest": "2026-08-30",
        "fatigue_state": "elevated",
        "driver": "delts recovery (heavy stimulus, elevated fatigue, ~82h)"
      },
      "fatigueAdvisory": {
        "fatigue_taxonomy": {
          "systemic": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "local": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "short_term",
            "adaptive_impact": "regional"
          },
          "neural": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "metabolic": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "acute",
            "adaptive_impact": "regional"
          },
          "structural": {
            "recovery_complexity": "very_high",
            "suppression_risk": "high",
            "persistence_profile": "long_term",
            "adaptive_impact": "local"
          }
        },
        "session_id": null,
        "generated_at": "2026-08-27T20:34:03.795498",
        "fatigue_signal": {
          "barbell_bent_over_row": 1.2744090432715622,
          "barbell_incline_bench_press": 0.8602555732340624,
          "bent over row barbell": 1.4772269376808442,
          "chest dip assisted": 0.9375,
          "chest fly dumbbell": 0.5169774553559345,
          "cross body hammer curl dumbbell": 0.43099854511344077,
          "incline bench press barbell": 1.6179993072553596,
          "incline bicep curl dumbbell": 0.595482476519437,
          "lateral raise band": 1.1827878018414533,
          "lateral raise dumbbell": 0.09,
          "one arm row dumbbell": 0.9456078713339864,
          "pull up assisted": 5.029428931467078,
          "rear_dumbbell_raise": 0.3075557113106938,
          "reverse fly dumbbell": 0.09,
          "seated_lateral_raise": 0.6503356969717105,
          "triceps extension dumbbell": 0.768638051992814,
          "triceps_pushdown": 5.533702580119798
        },
        "fatigue_accumulation": {
          "session_id": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
          "session_date": "2026-08-26",
          "global_fatigue_score": 9.129080459086497,
          "upper_fatigue": 4.5645402295432485,
          "lower_fatigue": 4.5645402295432485,
          "fatigue_trend_3": 8.2530529901183,
          "fatigue_trend_5": 7.038211585810371,
          "recovery_debt": 13.230720336848501
        },
        "deload_state": {
          "snapshot_date": "2026-08-27",
          "deload_flag": true,
          "pre_deload_flag": false,
          "trigger_type": "fatigue",
          "fatigue_trigger": 9.129080459086497,
          "regression_trigger": 0.6470588235294118,
          "cooldown_sessions": 3
        },
        "deload_signal_secondary": null,
        "stimulus_fatigue": null,
        "advisory_decision": null,
        "anomalies": null,
        "component_status": {
          "fatigue_taxonomy": "ok",
          "fatigue_accumulation": "ok",
          "fatigue_signal": "ok",
          "exercise_response_state": "ok",
          "deload_state": "ok"
        },
        "is_advisory": true
      },
      "stats": [
        "46m",
        "15 sets",
        "10.3k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY C \u2014 DELTS / ABS (3-4 days) \u2014 1 load\u2191 \u00b7 2 rep\u2191 \u00b7 0 hold.",
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
          "assess": "Last top set: 30 lb \u00d7 11 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 30 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (25) for 13-15 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 12 clean reps at 30 lb at RPE 9.5 or lower; then increase to 32.5 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 15,
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
                "lbs": 30,
                "reps": 11,
                "rpe": 9
              },
              "prop": {
                "lbs": 30,
                "reps": "11\u201315",
                "rpe": 9.5
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 25,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 25,
                "reps": "13\u201315",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 22.5,
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
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": "Would lower top RPE target 9.5 -> 9.25 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [
            {
              "date": "2026-08-21",
              "decision": "hold",
              "decisionScore": 31.1025,
              "decisionScoreRaw": 31.1025,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "6e91840d-be60-4550-9c3f-049e3836415f",
              "outcome": null
            },
            {
              "date": "2026-08-18",
              "decision": "hold",
              "decisionScore": 36.70666666666666,
              "decisionScoreRaw": 36.70666666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "cc38656e-1a35-4716-836a-223db66a862e",
              "outcome": null
            },
            {
              "date": "2026-08-15",
              "decision": "hold",
              "decisionScore": 30.27333333333333,
              "decisionScoreRaw": 30.27333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "641a1853-7827-45ff-b9b9-6347daf5e5fe",
              "outcome": null
            },
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
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
        },
        {
          "name": "Lateral Raise (Band)",
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
          "qc": "pass",
          "action": "progress_reps_tempo",
          "assess": "Last top set: 65 lb \u00d7 20 @ RPE 9 \u00b7 band_resisted_isolation \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Already on the top band (65 lb). No heavier band in inventory \u2014 progress reps \u2192 tempo \u2192 pauses \u2192 ROM \u2192 volume before any new band. Back-off holds its own last load (55) for 20 \u2014 it has not reached the 15-rep anchor on its own performance yet.",
          "when_to_add_load": "Already at the heaviest available resistance; progress reps, tempo and ROM before any new load.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null
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
                "lbs": null,
                "reps": null,
                "rpe": null
              },
              "prop": {
                "lbs": 65.0,
                "reps": "20",
                "rpe": 9.0
              }
            },
            {
              "type": 1,
              "last": {
                "lbs": 65,
                "reps": 20,
                "rpe": 9
              },
              "prop": {
                "lbs": 55.0,
                "reps": "20",
                "rpe": 9.0
              }
            },
            {
              "type": 2,
              "last": {
                "lbs": 55,
                "reps": 20,
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
          "rpeAdjustmentAdvisory": "Would lower top RPE target 9 -> 8.75 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
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
          "action": "increase_load",
          "assess": "Last top set: 25 lb \u00d7 12 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (12/14/14) \u2014 earn the jump; top set 25\u219227.5; +10.0% load costs ~3 reps, so the rep target drops 12\u21929 [range 7-9]. Isolation: only loaded once the whole cluster is productive. Back-off earned its own jump too \u2014 25 for 12-14, rebuilding to the reps it just produced.",
          "when_to_add_load": "Reach 12 clean reps at 25 lb at RPE 9.5 or lower; then increase to 27.5 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 15,
                "reps": 8,
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
                "lbs": 25,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 27.5,
                "reps": "7\u20139",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 22.5,
                "reps": 14,
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
                "lbs": 20,
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
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": "Would lower top RPE target 9 -> 8.75 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [
            {
              "date": "2026-08-21",
              "decision": "hold",
              "decisionScore": 26.8525,
              "decisionScoreRaw": 26.8525,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "6e91840d-be60-4550-9c3f-049e3836415f",
              "outcome": null
            },
            {
              "date": "2026-08-15",
              "decision": "hold",
              "decisionScore": 26.123333333333335,
              "decisionScoreRaw": 26.123333333333335,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "641a1853-7827-45ff-b9b9-6347daf5e5fe",
              "outcome": null
            },
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
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
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
          "assess": "Last top set: 0 lb \u00d7 15 @ RPE 9 \u00b7 bodyweight \u00b7 anchor 20 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Bodyweight \u2014 chase reps to \u226520 at RPE 9 before adding external load. Back-off holds its own last load (bodyweight) for 15-17 \u2014 it has not reached the 20-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 20 clean reps at bodyweight at RPE 9 or lower; then add 5 lb external load.",
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
                "reps": "15\u201325",
                "rpe": 9.0
              }
            },
            {
              "type": 1,
              "last": {
                "lbs": 0,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": "15\u201317",
                "rpe": 9.0
              }
            },
            {
              "type": 2,
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
          "rpeAdjustmentAdvisory": "Would lower top RPE target 9 -> 8.75 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
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
          "action": "bloodflow",
          "assess": "Most recent primary session: 300 lb \u00d7 10 @ RPE 9 and 275 lb \u00d7 10 @ RPE 9 on 2026-08-23. Today's Day C occurrence is classified as a blood-flow/recovery exposure.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Blood-flow/recovery exposure \u2014 Triceps Pushdown received its primary progression work on 2026-08-23. Prescribe 150 lb \u00d7 8 @ RPE 5, 200 lb \u00d7 20 @ RPE 7 maximum, and 175 lb \u00d7 20 @ RPE 7 maximum. Stop each working set at 20 reps or RPE 7, whichever occurs first. Today's performance is excluded from primary progression decisions. The primary progression remains 300 lb \u00d7 15 clean reps at RPE 9 or lower before increasing to 300 lb.",
          "when_to_add_load": "Reach 15 clean reps at 300 lb at RPE 9 or lower; then step up to 325 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 200,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 150.0,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 250,
                "reps": 15,
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
                "reps": 10,
                "rpe": 6
              },
              "prop": {
                "lbs": 200.0,
                "reps": "20",
                "rpe": 7.0
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
                "lbs": 175.0,
                "reps": "20",
                "rpe": 7.0
              }
            }
          ],
          "gate_status": "not_gated",
          "gate_reason": null,
          "recoveryOverlapWarning": "Day A (back/arms) also trains arms (the logged Day A session on 2026-08-26). This exercise's own recovery estimate (32h, volume stimulus, low fatigue) extends to 2026-08-27, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": "Would lower top RPE target 7 -> 6.75 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [
            {
              "date": "2026-08-19",
              "decision": "increase",
              "decisionScore": 338.58166666666665,
              "decisionScoreRaw": 338.58166666666665,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "1c95db48-1b09-4a28-b993-5b31f437de12",
              "outcome": null
            },
            {
              "date": "2026-08-15",
              "decision": "increase",
              "decisionScore": 359.20666666666665,
              "decisionScoreRaw": 359.20666666666665,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "641a1853-7827-45ff-b9b9-6347daf5e5fe",
              "outcome": null
            },
            {
              "date": "2026-08-14",
              "decision": "increase",
              "decisionScore": 336.29,
              "decisionScoreRaw": 336.29,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "015cf079-c86d-43d0-b9d1-005d9e98f0a2",
              "outcome": null
            },
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
          },
          "occurrenceRole": "bloodflow_recovery",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "1bf16873-8ade-4b02-8964-f6bb55600cef",
            "date": "2026-08-23",
            "sets": [
              {
                "lbs": 200.0,
                "reps": 10,
                "rpe": 5.0
              },
              {
                "lbs": 250.0,
                "reps": 5,
                "rpe": 6.0
              },
              {
                "lbs": 300.0,
                "reps": 10,
                "rpe": 9.0
              },
              {
                "lbs": 275.0,
                "reps": 10,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Most recent primary-shaped exposure was 2026-08-23 (48h ago) -- within the 48h blood-flow window."
          ]
        },
        {
          "name": "Incline Bicep Curl (Dumbbell)",
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
          "qc": "fail",
          "action": "review_required",
          "assess": "Last top set: load and reps not recorded.",
          "rationale": "<b>\u2717 QC fail: insufficient_performed_input, missing(performed_reps), missing(performed_load)</b> \u00b7 Cannot prescribe: last session's load and reps were not logged for this exercise. Record them and the engine resumes \u2014 no load or rep target is being asserted from missing data.",
          "when_to_add_load": "Progression criterion unavailable until a valid working set is logged.",
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
              "type": "T",
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
            }
          ],
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": "Day A (back/arms) also trains arms (the logged Day A session on 2026-08-26). This exercise's own recovery estimate (50h, stretch stimulus, moderate fatigue) extends to 2026-08-28, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
        }
      ],
      "sequencingAdvisory": "\"Seated Lateral Raise\" (isolation/accessory) is displayed before \"Hanging Leg Raise\" (a major/compound movement) -- major movements are usually sequenced first so accessory fatigue doesn't compromise them. ASSUMPTION, not a confirmed defect: this reflects the displayed/template order the session was logged in, not verified execution order -- VOLM logs no per-set/per-group timestamps, only session-level start/end times."
    },
    {
      "day": "B",
      "title": "DAY B - CHEST / TRICEPS  (5 days)",
      "date": "2026-08-23",
      "prevDate": "2026-08-19",
      "nextAvailable": {
        "earliest": "2026-08-27",
        "latest": "2026-08-28",
        "fatigue_state": "elevated",
        "driver": "chest recovery (heavy stimulus, elevated fatigue, ~84h)"
      },
      "fatigueAdvisory": {
        "fatigue_taxonomy": {
          "systemic": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "local": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "short_term",
            "adaptive_impact": "regional"
          },
          "neural": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "metabolic": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "acute",
            "adaptive_impact": "regional"
          },
          "structural": {
            "recovery_complexity": "very_high",
            "suppression_risk": "high",
            "persistence_profile": "long_term",
            "adaptive_impact": "local"
          }
        },
        "session_id": null,
        "generated_at": "2026-08-27T20:34:03.795498",
        "fatigue_signal": {
          "barbell_bent_over_row": 1.2744090432715622,
          "barbell_incline_bench_press": 0.8602555732340624,
          "bent over row barbell": 1.4772269376808442,
          "chest dip assisted": 0.9375,
          "chest fly dumbbell": 0.5169774553559345,
          "cross body hammer curl dumbbell": 0.43099854511344077,
          "incline bench press barbell": 1.6179993072553596,
          "incline bicep curl dumbbell": 0.595482476519437,
          "lateral raise band": 1.1827878018414533,
          "lateral raise dumbbell": 0.09,
          "one arm row dumbbell": 0.9456078713339864,
          "pull up assisted": 5.029428931467078,
          "rear_dumbbell_raise": 0.3075557113106938,
          "reverse fly dumbbell": 0.09,
          "seated_lateral_raise": 0.6503356969717105,
          "triceps extension dumbbell": 0.768638051992814,
          "triceps_pushdown": 5.533702580119798
        },
        "fatigue_accumulation": {
          "session_id": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
          "session_date": "2026-08-26",
          "global_fatigue_score": 9.129080459086497,
          "upper_fatigue": 4.5645402295432485,
          "lower_fatigue": 4.5645402295432485,
          "fatigue_trend_3": 8.2530529901183,
          "fatigue_trend_5": 7.038211585810371,
          "recovery_debt": 13.230720336848501
        },
        "deload_state": {
          "snapshot_date": "2026-08-27",
          "deload_flag": true,
          "pre_deload_flag": false,
          "trigger_type": "fatigue",
          "fatigue_trigger": 9.129080459086497,
          "regression_trigger": 0.6470588235294118,
          "cooldown_sessions": 3
        },
        "deload_signal_secondary": null,
        "stimulus_fatigue": null,
        "advisory_decision": null,
        "anomalies": null,
        "component_status": {
          "fatigue_taxonomy": "ok",
          "fatigue_accumulation": "ok",
          "fatigue_signal": "ok",
          "exercise_response_state": "ok",
          "deload_state": "ok"
        },
        "is_advisory": true
      },
      "stats": [
        "52m",
        "14 sets",
        "11.6k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY B - CHEST / TRICEPS  (5 days) \u2014 4 load\u2191 \u00b7 1 rep\u2191 \u00b7 0 hold.",
        "assess": "6 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>5/6</b> prescriptions passed the validation gate; <b>1 flagged</b> \u2014 see the \u2717 tags below."
      },
      "exercises": [
        {
          "name": "Incline Bench Press (Barbell)",
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
          "action": "increase_load",
          "assess": "Last top set: 148.5 lb \u00d7 11 @ RPE 10 \u00b7 barbell \u00b7 anchor 10 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set 148.5\u00d711 at RPE 10 (\u2265 anchor 10), backoffs productive \u2014 top set 148.5\u2192154.3; +3.9% load costs ~1 rep, so the rep target drops 11\u219210 [range 5-10]. Back-off holds its own last load (132.3) for 8-10 \u2014 it has not reached the 10-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 10 clean reps at 148.5 lb at RPE 10 or lower; then increase to 154.3 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 88,
                "reps": 12,
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
                "lbs": 121,
                "reps": 5,
                "rpe": 6
              },
              "prop": {
                "lbs": 121.3,
                "reps": "5",
                "rpe": 6.5
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 148.5,
                "reps": 11,
                "rpe": 10
              },
              "prop": {
                "lbs": 154.3,
                "reps": "5\u201310",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 132,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 132.3,
                "reps": "8\u201310",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": "Would lower top RPE target 9 -> 8.75 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
        },
        {
          "name": "Chest Fly (Dumbbell)",
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
          "assess": "Last top set: 42.5 lb \u00d7 13 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (13/11) \u2014 earn the jump; top set 42.5\u219245; +5.9% load costs ~2 reps, so the rep target drops 13\u219211 [range 9-11]. Isolation: only loaded once the whole cluster is productive. Back-off holds its own last load (37.5) for 11-13 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 12 clean reps at 42.5 lb at RPE 9.5 or lower; then increase to 45 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 22.5,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 25,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 42.5,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 45,
                "reps": "9\u201311",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 37.5,
                "reps": 11,
                "rpe": 9
              },
              "prop": {
                "lbs": 37.5,
                "reps": "11\u201313",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": "Would lower top RPE target 9 -> 8.75 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
        },
        {
          "name": "Triceps Extension (Dumbbell)",
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
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 65 lb \u00d7 12 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (12/10) \u2014 earn the jump; top set 65\u219267.5; +3.8% load costs ~1 rep, so the rep target drops 12\u219211 [range 9-11]. Isolation: only loaded once the whole cluster is productive. Back-off holds its own last load (60) for 10-12 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 12 clean reps at 65 lb at RPE 9.5 or lower; then increase to 67.5 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 50,
                "reps": 12,
                "rpe": 5
              },
              "prop": {
                "lbs": 37.5,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 65,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 67.5,
                "reps": "9\u201311",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 60,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 60,
                "reps": "10\u201312",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": "Would lower top RPE target 9 -> 8.75 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
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
          "assess": "Last top set: 300 lb \u00d7 10 @ RPE 9 \u00b7 band_combo \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 300 lb band stack \u2014 chase reps to ~15 at RPE 9 before adding a band. Bands 50/75/100/125 stack to 50/75/100/125/150/175/200/225/250/275/300/350. Back-off holds its own last load (275) for 10-12 \u2014 it has not reached the 15-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 15 clean reps at 300 lb at RPE 9 or lower; then step up to 325 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 200,
                "reps": 10,
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
                "reps": 5,
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
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 300.0,
                "reps": "10\u201320",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 275,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 275.0,
                "reps": "10\u201312",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "confirmed",
          "gate_reason": "next_program: increase (fresh, cohort signal only \u2014 per-exercise gate governs the actual load)",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": "Would lower top RPE target 9 -> 8.75 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [
            {
              "date": "2026-08-19",
              "decision": "increase",
              "decisionScore": 338.58166666666665,
              "decisionScoreRaw": 338.58166666666665,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "1c95db48-1b09-4a28-b993-5b31f437de12",
              "outcome": null
            },
            {
              "date": "2026-08-15",
              "decision": "increase",
              "decisionScore": 359.20666666666665,
              "decisionScoreRaw": 359.20666666666665,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "641a1853-7827-45ff-b9b9-6347daf5e5fe",
              "outcome": null
            },
            {
              "date": "2026-08-14",
              "decision": "increase",
              "decisionScore": 336.29,
              "decisionScoreRaw": 336.29,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "015cf079-c86d-43d0-b9d1-005d9e98f0a2",
              "outcome": null
            },
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
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
        },
        {
          "name": "Incline Bicep Curl (Dumbbell)",
          "icon": "\ud83d\udcaa",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 22.5 lb \u00d7 12 @ RPE 6 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (12/14) \u2014 earn the jump; top set 22.5\u219225; +11.1% load costs ~4 reps, so the rep target drops 12\u21928 [range 6-8]. Isolation: only loaded once the whole cluster is productive. Back-off earned its own jump too \u2014 22.5 for 12-14, rebuilding to the reps it just produced.",
          "when_to_add_load": "Reach 12 clean reps at 22.5 lb at RPE 9.5 or lower; then increase to 25 lb.",
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
                "reps": "12\u201314",
                "rpe": 9.0
              }
            },
            {
              "type": 2,
              "last": {
                "lbs": 22.5,
                "reps": 12,
                "rpe": 6
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
                "lbs": 22.5,
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
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": "Would lower top RPE target 9.5 -> 9.25 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
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
          "when_to_add_load": "Progression criterion unavailable until a valid working set is logged.",
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
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
        }
      ],
      "sequencingAdvisory": "\"Chest Fly (Dumbbell)\" (isolation/accessory) is displayed before \"Chest Dip\" (a major/compound movement) -- major movements are usually sequenced first so accessory fatigue doesn't compromise them. ASSUMPTION, not a confirmed defect: this reflects the displayed/template order the session was logged in, not verified execution order -- VOLM logs no per-set/per-group timestamps, only session-level start/end times."
    },
    {
      "day": "A",
      "title": "DAY A \u2014 BACK / BICEPS (4-5 days)",
      "date": "2026-08-22",
      "prevDate": "2026-08-18",
      "nextAvailable": {
        "earliest": "2026-08-26",
        "latest": "2026-08-27",
        "fatigue_state": "elevated",
        "driver": "back recovery (heavy stimulus, elevated fatigue, ~86h)"
      },
      "fatigueAdvisory": {
        "fatigue_taxonomy": {
          "systemic": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "local": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "short_term",
            "adaptive_impact": "regional"
          },
          "neural": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "metabolic": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "acute",
            "adaptive_impact": "regional"
          },
          "structural": {
            "recovery_complexity": "very_high",
            "suppression_risk": "high",
            "persistence_profile": "long_term",
            "adaptive_impact": "local"
          }
        },
        "session_id": null,
        "generated_at": "2026-08-27T20:34:03.795498",
        "fatigue_signal": {
          "barbell_bent_over_row": 1.2744090432715622,
          "barbell_incline_bench_press": 0.8602555732340624,
          "bent over row barbell": 1.4772269376808442,
          "chest dip assisted": 0.9375,
          "chest fly dumbbell": 0.5169774553559345,
          "cross body hammer curl dumbbell": 0.43099854511344077,
          "incline bench press barbell": 1.6179993072553596,
          "incline bicep curl dumbbell": 0.595482476519437,
          "lateral raise band": 1.1827878018414533,
          "lateral raise dumbbell": 0.09,
          "one arm row dumbbell": 0.9456078713339864,
          "pull up assisted": 5.029428931467078,
          "rear_dumbbell_raise": 0.3075557113106938,
          "reverse fly dumbbell": 0.09,
          "seated_lateral_raise": 0.6503356969717105,
          "triceps extension dumbbell": 0.768638051992814,
          "triceps_pushdown": 5.533702580119798
        },
        "fatigue_accumulation": {
          "session_id": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
          "session_date": "2026-08-26",
          "global_fatigue_score": 9.129080459086497,
          "upper_fatigue": 4.5645402295432485,
          "lower_fatigue": 4.5645402295432485,
          "fatigue_trend_3": 8.2530529901183,
          "fatigue_trend_5": 7.038211585810371,
          "recovery_debt": 13.230720336848501
        },
        "deload_state": {
          "snapshot_date": "2026-08-27",
          "deload_flag": true,
          "pre_deload_flag": false,
          "trigger_type": "fatigue",
          "fatigue_trigger": 9.129080459086497,
          "regression_trigger": 0.6470588235294118,
          "cooldown_sessions": 3
        },
        "deload_signal_secondary": null,
        "stimulus_fatigue": null,
        "advisory_decision": null,
        "anomalies": null,
        "component_status": {
          "fatigue_taxonomy": "ok",
          "fatigue_accumulation": "ok",
          "fatigue_signal": "ok",
          "exercise_response_state": "ok",
          "deload_state": "ok"
        },
        "is_advisory": true
      },
      "stats": [
        "79m",
        "16 sets",
        "11.0k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY A \u2014 BACK / BICEPS (4-5 days) \u2014 3 load\u2191 \u00b7 2 rep\u2191 \u00b7 0 hold.",
        "assess": "7 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>6/7</b> prescriptions passed the validation gate; <b>1 flagged</b> \u2014 see the \u2717 tags below."
      },
      "exercises": [
        {
          "name": "Pull Up (Assisted)",
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
          "when_to_add_load": "Reach 15 clean reps with 175 lb assistance at RPE 10 or lower; then reduce assistance to 150 lb.",
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
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 200.0,
                "reps": "8\u201310",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": "Would lower top RPE target 9 -> 8.75 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
        },
        {
          "name": "Bent Over Row (Barbell)",
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
          "action": "increase_load",
          "assess": "Last top set: 143 lb \u00d7 11 @ RPE 9 \u00b7 barbell \u00b7 anchor 10 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set 143\u00d711 at RPE 9 (\u2265 anchor 10), backoffs productive \u2014 top set 143\u2192148.8; +4.1% load costs ~1 rep, so the rep target drops 11\u219210 [range 5-10]. Back-off earned its own jump too \u2014 132.3 for 9-11, rebuilding to the reps it just produced.",
          "when_to_add_load": "Reach 10 clean reps at 143 lb at RPE 10 or lower; then increase to 148.8 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 88,
                "reps": 8,
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
                "lbs": 115.5,
                "reps": 6,
                "rpe": 6
              },
              "prop": {
                "lbs": 121.3,
                "reps": "5",
                "rpe": 6.5
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 143,
                "reps": 11,
                "rpe": 9
              },
              "prop": {
                "lbs": 148.8,
                "reps": "5\u201310",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 132,
                "reps": 11,
                "rpe": 9
              },
              "prop": {
                "lbs": 132.3,
                "reps": "9\u201311",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": "Would lower top RPE target 9 -> 8.75 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
        },
        {
          "name": "Incline Bicep Curl (Dumbbell)",
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
          "assess": "Last top set: 35 lb \u00d7 11 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 35 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (32.5) for 11-13 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 12 clean reps at 35 lb at RPE 9.5 or lower; then increase to 37.5 lb.",
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
                "rpe": 9
              },
              "prop": {
                "lbs": 32.5,
                "reps": "11\u201313",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 32.5,
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
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": "Day B (chest/arms) also trains arms (the logged Day B session on 2026-08-23). This exercise's own recovery estimate (50h, stretch stimulus, moderate fatigue) extends to 2026-08-25, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": "Would lower top RPE target 9.5 -> 9.25 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
        },
        {
          "name": "One Arm Row (Dumbbell)",
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
          "assess": "Last top set: 75 lb \u00d7 14 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set 75\u00d714 at RPE 9 (\u2265 anchor 12), backoffs productive \u2014 top set 75\u219280; +6.7% load costs ~2 reps, so the rep target drops 14\u219212 [range 6-12]. Back-off earned its own jump too \u2014 72.5 for 11-13, rebuilding to the reps it just produced.",
          "when_to_add_load": "Reach 12 clean reps at 75 lb at RPE 10 or lower; then increase to 80 lb.",
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
                "reps": 5,
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
                "reps": 14,
                "rpe": 9
              },
              "prop": {
                "lbs": 80,
                "reps": "6\u201312",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 67.5,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 72.5,
                "reps": "11\u201313",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": "Would lower top RPE target 9 -> 8.75 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
        },
        {
          "name": "Cross Body Hammer Curl (Dumbbell)",
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
          "action": "increase_load",
          "assess": "Last top set: 32.5 lb \u00d7 15 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (15/13) \u2014 earn the jump; top set 32.5\u219235; +7.7% load costs ~3 reps, so the rep target drops 15\u219212 [range 10-12]. Isolation: only loaded once the whole cluster is productive. Back-off earned its own jump too \u2014 32.5 for 11-13, rebuilding to the reps it just produced.",
          "when_to_add_load": "Reach 12 clean reps at 32.5 lb at RPE 9.5 or lower; then increase to 35 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 17.5,
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
                "lbs": 32.5,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": 35,
                "reps": "10\u201312",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 30,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 32.5,
                "reps": "11\u201313",
                "rpe": 9.0
              }
            }
          ],
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": "Day B (chest/arms) also trains arms (the logged Day B session on 2026-08-23). This exercise's own recovery estimate (50h, stretch stimulus, moderate fatigue) extends to 2026-08-25, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": "Would lower top RPE target 9 -> 8.75 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
        },
        {
          "name": "Seated Lateral Raise",
          "icon": "\ud83d\uded7",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "bloodflow",
          "assess": "Most recent primary session: 27.5 lb \u00d7 13 @ RPE 9, 25 lb \u00d7 10 @ RPE 9, and 22.5 lb \u00d7 12 @ RPE 9 on 2026-08-21. Today's Day A occurrence is classified as a blood-flow/recovery exposure.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Blood-flow/recovery exposure \u2014 Seated Lateral Raise received its primary progression work on 2026-08-21. Prescribe 15 lb \u00d7 8 @ RPE 5, 17.5 lb \u00d7 20 @ RPE 7 maximum, and 15 lb \u00d7 20 @ RPE 7 maximum. Stop each working set at 20 reps or RPE 7, whichever occurs first. Today's performance is excluded from primary progression decisions. The primary progression remains 27.5 lb \u00d7 12 clean reps at RPE 9.5 or lower before increasing to 30 lb.",
          "when_to_add_load": "Reach 12 clean reps at 27.5 lb at RPE 9.5 or lower; then increase to 30 lb.",
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
                "lbs": 17.5,
                "reps": "20",
                "rpe": 7.0
              }
            },
            {
              "type": 1,
              "last": {
                "lbs": 15,
                "reps": 8,
                "rpe": null
              },
              "prop": {
                "lbs": 15,
                "reps": "20",
                "rpe": 7.0
              }
            },
            {
              "type": 2,
              "last": {
                "lbs": 27.5,
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
              "type": 3,
              "last": {
                "lbs": 25,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ],
          "gate_status": "not_gated",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": "Would lower top RPE target 7 -> 6.75 based on a recent pattern of undershooting prescribed targets (signal -0.40). Advisory only -- the prescribed target is unchanged.",
          "decisionHistory": [
            {
              "date": "2026-08-21",
              "decision": "hold",
              "decisionScore": 31.1025,
              "decisionScoreRaw": 31.1025,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "6e91840d-be60-4550-9c3f-049e3836415f",
              "outcome": null
            },
            {
              "date": "2026-08-18",
              "decision": "hold",
              "decisionScore": 36.70666666666666,
              "decisionScoreRaw": 36.70666666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "cc38656e-1a35-4716-836a-223db66a862e",
              "outcome": null
            },
            {
              "date": "2026-08-15",
              "decision": "hold",
              "decisionScore": 30.27333333333333,
              "decisionScoreRaw": 30.27333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "641a1853-7827-45ff-b9b9-6347daf5e5fe",
              "outcome": null
            },
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
          },
          "occurrenceRole": "bloodflow_recovery",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "6e91840d-be60-4550-9c3f-049e3836415f",
            "date": "2026-08-21",
            "sets": [
              {
                "lbs": 15.0,
                "reps": 10,
                "rpe": 5.0
              },
              {
                "lbs": 27.5,
                "reps": 13,
                "rpe": 9.0
              },
              {
                "lbs": 25.0,
                "reps": 10,
                "rpe": 9.0
              },
              {
                "lbs": 22.5,
                "reps": 12,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Most recent primary-shaped exposure was 2026-08-21 (24h ago) -- within the 48h blood-flow window."
          ]
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
          "when_to_add_load": "Progression criterion unavailable until a valid working set is logged.",
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
          "gate_reason": "next_program: increase (fresh, cohort signal only \u2014 per-exercise gate governs the actual load)",
          "recoveryOverlapWarning": "Day B (chest/arms) also trains arms (the logged Day B session on 2026-08-23). This exercise's own recovery estimate (38h, volume stimulus, moderate fatigue) extends to 2026-08-24, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-08-19",
              "decision": "increase",
              "decisionScore": 338.58166666666665,
              "decisionScoreRaw": 338.58166666666665,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "1c95db48-1b09-4a28-b993-5b31f437de12",
              "outcome": null
            },
            {
              "date": "2026-08-15",
              "decision": "increase",
              "decisionScore": 359.20666666666665,
              "decisionScoreRaw": 359.20666666666665,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "641a1853-7827-45ff-b9b9-6347daf5e5fe",
              "outcome": null
            },
            {
              "date": "2026-08-14",
              "decision": "increase",
              "decisionScore": 336.29,
              "decisionScoreRaw": 336.29,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "015cf079-c86d-43d0-b9d1-005d9e98f0a2",
              "outcome": null
            },
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
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No qualifying recent primary exposure found within the blood-flow window; defaulting to primary progression."
          ]
        }
      ],
      "sequencingAdvisory": "\"Incline Bicep Curl (Dumbbell)\" (isolation/accessory) is displayed before \"One Arm Row (Dumbbell)\" (a major/compound movement) -- major movements are usually sequenced first so accessory fatigue doesn't compromise them. ASSUMPTION, not a confirmed defect: this reflects the displayed/template order the session was logged in, not verified execution order -- VOLM logs no per-set/per-group timestamps, only session-level start/end times."
    }
  ]
};
