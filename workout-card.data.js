window.PROGRAM = {
  "author": "C Crawford",
  "avatar": "",
  "sessions": [
    {
      "day": "B",
      "title": "DAY B - CHEST / TRICEPS",
      "date": "2026-10-30",
      "sessionRole": "primary",
      "sessionRoleSource": "scheduled_slot",
      "sessionRoleWarnings": [],
      "prevDate": "2026-10-25",
      "nextAvailable": {
        "earliest": "2026-11-03",
        "latest": "2026-11-04",
        "fatigue_state": "moderate",
        "driver": "chest recovery (heavy stimulus, moderate fatigue, ~78h)"
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
        "generated_at": "2026-10-30T20:35:35.430133",
        "fatigue_signal": null,
        "fatigue_accumulation": null,
        "deload_state": null,
        "deload_signal_secondary": null,
        "stimulus_fatigue": null,
        "advisory_decision": null,
        "anomalies": null,
        "component_status": {
          "fatigue_taxonomy": "ok",
          "fatigue_accumulation": "unavailable",
          "fatigue_signal": "unavailable",
          "exercise_response_state": "unavailable",
          "deload_state": "unavailable"
        },
        "thresholds": {
          "global_fatigue_score": {
            "scale": "unbounded_sum",
            "med": 4.5,
            "high": 5.5
          },
          "recovery_debt": {
            "scale": "unbounded_decaying_accumulator",
            "med": 1.5,
            "high": 2.5,
            "baseline": 4.0,
            "decay": 0.7
          },
          "regress_ratio": {
            "scale": "ratio_0_1",
            "med": 0.3,
            "high": 0.5
          }
        },
        "is_advisory": true
      },
      "stats": [
        "67m",
        "14 sets",
        "13.7k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY B - CHEST / TRICEPS \u2014 4 load\u2191 \u00b7 1 rep\u2191 \u00b7 0 hold \u00b7 1 non-primary excluded.",
        "assess": "6 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>5/6</b> prescriptions passed the validation gate; <b>1 flagged</b> \u2014 see the \u2717 tags below.",
        "nonPrimaryExcluded": 1
      },
      "exercises": [
        {
          "name": "Exercise",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": null,
          "rest": "3:00",
          "cues": [
            "Shoulder blades set",
            "Lower under control",
            "Press through upper chest",
            "No bouncing",
            "Stop before bar speed dies"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "fail",
          "action": "supplemental",
          "assess": "Most recent primary session: load and reps and rpe not recorded.",
          "rationale": "<b>\u2717 QC fail: insufficient_reference_input, missing(load), missing(reps), missing(rpe), reference_missing(target=exercise)</b> \u00b7 Cannot prescribe supplemental volume for Exercise: the primary reference session's load and reps and rpe were not logged for this exercise. No load, rep or RPE target is being asserted from missing data.",
          "when_to_add_load": "Progression criterion unavailable until a valid working set is logged.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 88,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "W",
              "last": {
                "lbs": 121,
                "reps": 5,
                "rpe": 6
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "T",
              "last": {
                "lbs": 150,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 4,
              "last": {
                "lbs": 137.5,
                "reps": 6,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            }
          ],
          "volumeLbs": 2025.0,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=supplemental_volume).",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "supplemental_volume",
          "roleSource": "recovery_override",
          "roleConfidence": "medium",
          "primaryReference": null,
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Fatigue state for this occurrence: 'elevated'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 6 decided: fatigue_state=elevated with no qualifying history signal -> supplemental_volume."
          ],
          "futurePrescriptionRole": {
            "role": "supplemental_volume",
            "source": "recovery_override",
            "governingSource": "fatigue_l6",
            "change": "unchanged",
            "targetExposureDate": "2026-11-02",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
              "No qualifying prior exact-exercise exposure found.",
              "Fatigue state for this occurrence: 'elevated'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
              "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
              "Level 6 decided: fatigue_state=elevated with no qualifying history signal -> supplemental_volume.",
              "Forward projection: target exposure 2026-11-02 (source=estimated); governing source=fatigue_l6. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (supplemental_volume); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Exercise",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": null,
          "rest": "2:30",
          "cues": [
            "Stretch focus",
            "Soft elbow bend fixed",
            "2\u20133 sec eccentric",
            "No pressing motion",
            "Stop short of shoulder irritation"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 50 lb \u00d7 12 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set 50\u00d712 at RPE 9 (\u2265 anchor 12), backoffs productive \u2014 top set 50\u219255; +10.0% load costs ~3 reps, so the rep target drops 12\u21929 [range 7-9]. Back-off earned its own jump too \u2014 50 for 10-12, rebuilding to the reps it just produced.",
          "when_to_add_load": "Reach 12 clean reps at 50 lb at RPE 9.5 or lower; then increase to 55 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 30,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 30,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 50,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 55,
                "reps": "7\u20139",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 45,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 50,
                "reps": "10\u201312",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 1140.0,
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
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
            "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day)."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "fallback",
            "governingSource": "fallback_l8",
            "change": "unchanged",
            "targetExposureDate": "2026-11-02",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
              "No qualifying prior exact-exercise exposure found.",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
              "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
              "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
              "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day).",
              "Forward projection: target exposure 2026-11-02 (source=estimated); governing source=fallback_l8. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Exercise",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": null,
          "rest": "2:30",
          "cues": [
            "Elbows fixed slightly in",
            "Full stretch behind head",
            "2\u20133 sec eccentric",
            "Pause in stretch",
            "No shoulder movement",
            "Keep tension on triceps"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 72.5 lb \u00d7 10 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 72.5 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (65) for 9-11 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 12 clean reps at 72.5 lb at RPE 9.5 or lower; then increase to 80 lb.",
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
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 72.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 72.5,
                "reps": "11\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 65,
                "reps": 9,
                "rpe": 9
              },
              "prop": {
                "lbs": 65,
                "reps": "9\u201311",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 1310.0,
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
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
            "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day)."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "fallback",
            "governingSource": "fallback_l8",
            "change": "unchanged",
            "targetExposureDate": "2026-11-02",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
              "No qualifying prior exact-exercise exposure found.",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
              "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
              "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
              "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day).",
              "Forward projection: target exposure 2026-11-02 (source=estimated); governing source=fallback_l8. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Exercise",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": null,
          "rest": "2:00",
          "cues": [
            "Elbows pinned",
            "Full lockout",
            "Controlled return",
            "No shoulder roll",
            "Keep tension on triceps"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 300 lb \u00d7 15 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set 300\u00d715 at RPE 9 (\u2265 anchor 12), backoffs productive \u2014 top set 300\u2192305; +1.7% load costs ~1 rep, so the rep target drops 15\u219214 [range 8-14]. Back-off steps its load down to 295 for 10-12 \u2014 the same load was repeated and could not hold its rep count at comparable effort (10\u219215 reps at that load), so the load steps down rather than the set being dropped.",
          "when_to_add_load": "Reach 12 clean reps at 300 lb at RPE 9.5 or lower; then increase to 305 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 200,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 170,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 300,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": 305,
                "reps": "8\u201314",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 300,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 295,
                "reps": "10\u201312",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 7500.0,
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
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
            "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day)."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "fallback",
            "governingSource": "fallback_l8",
            "change": "unchanged",
            "targetExposureDate": "2026-11-02",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
              "No qualifying prior exact-exercise exposure found.",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
              "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
              "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
              "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day).",
              "Forward projection: target exposure 2026-11-02 (source=estimated); governing source=fallback_l8. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Exercise",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": null,
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 30 lb \u00d7 14 @ RPE 8 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set 30\u00d714 at RPE 8 (\u2265 anchor 12), backoffs productive \u2014 top set 30\u219235; +16.7% load costs ~6 reps, so the rep target drops 14\u21928 [range 6-8]. Back-off holds its own last load (27.5) for 10-12 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 12 clean reps at 30 lb at RPE 9.5 or lower; then increase to 35 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 20,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 35,
                "reps": "6\u20138",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 1,
              "last": {
                "lbs": 20,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 27.5,
                "reps": "10\u201312",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": 2,
              "last": {
                "lbs": 30,
                "reps": 14,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 27.5,
                "reps": 10,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 855.0,
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
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Fatigue state for this occurrence: 'low'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
            "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day)."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "fallback",
            "governingSource": "fallback_l8",
            "change": "unchanged",
            "targetExposureDate": "2026-11-02",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
              "No qualifying prior exact-exercise exposure found.",
              "Fatigue state for this occurrence: 'low'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
              "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
              "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
              "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day).",
              "Forward projection: target exposure 2026-11-02 (source=estimated); governing source=fallback_l8. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Exercise",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": null,
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 30 lb \u00d7 12 @ RPE 8 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set 30\u00d712 at RPE 8 (\u2265 anchor 12), backoffs productive \u2014 top set 30\u219235; +16.7% load costs ~6 reps, so the rep target drops 12\u21926 [range 4-6]. Back-off earned its own jump too \u2014 30 for 10-12, rebuilding to the reps it just produced.",
          "when_to_add_load": "Reach 12 clean reps at 30 lb at RPE 9.5 or lower; then increase to 35 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 20,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 35,
                "reps": "4\u20136",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 1,
              "last": {
                "lbs": 20,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 30,
                "reps": "10\u201312",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": 2,
              "last": {
                "lbs": 30,
                "reps": 12,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 25,
                "reps": 12,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 820.0,
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
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Fatigue state for this occurrence: 'low'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
            "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day)."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "fallback",
            "governingSource": "fallback_l8",
            "change": "unchanged",
            "targetExposureDate": "2026-11-02",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
              "No qualifying prior exact-exercise exposure found.",
              "Fatigue state for this occurrence: 'low'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
              "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
              "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
              "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day).",
              "Forward projection: target exposure 2026-11-02 (source=estimated); governing source=fallback_l8. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        }
      ],
      "sequencingAdvisory": null
    },
    {
      "day": "A",
      "title": "DAY A \u2014 BACK / BICEPS",
      "date": "2026-10-29",
      "sessionRole": "primary",
      "sessionRoleSource": "scheduled_slot",
      "sessionRoleWarnings": [],
      "prevDate": "2026-10-24",
      "nextAvailable": {
        "earliest": "2026-11-02",
        "latest": "2026-11-03",
        "fatigue_state": "moderate",
        "driver": "back recovery (heavy stimulus, moderate fatigue, ~80h)"
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
        "generated_at": "2026-10-30T20:35:35.430133",
        "fatigue_signal": null,
        "fatigue_accumulation": null,
        "deload_state": null,
        "deload_signal_secondary": null,
        "stimulus_fatigue": null,
        "advisory_decision": null,
        "anomalies": null,
        "component_status": {
          "fatigue_taxonomy": "ok",
          "fatigue_accumulation": "unavailable",
          "fatigue_signal": "unavailable",
          "exercise_response_state": "unavailable",
          "deload_state": "unavailable"
        },
        "thresholds": {
          "global_fatigue_score": {
            "scale": "unbounded_sum",
            "med": 4.5,
            "high": 5.5
          },
          "recovery_debt": {
            "scale": "unbounded_decaying_accumulator",
            "med": 1.5,
            "high": 2.5,
            "baseline": 4.0,
            "decay": 0.7
          },
          "regress_ratio": {
            "scale": "ratio_0_1",
            "med": 0.3,
            "high": 0.5
          }
        },
        "is_advisory": true
      },
      "stats": [
        "68m",
        "10 sets",
        "9.7k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY A \u2014 BACK / BICEPS \u2014 2 load\u2191 \u00b7 1 rep\u2191 \u00b7 0 hold \u00b7 2 non-primary excluded.",
        "assess": "5 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>3/5</b> prescriptions passed the validation gate; <b>2 flagged</b> \u2014 see the \u2717 tags below.",
        "nonPrimaryExcluded": 2
      },
      "exercises": [
        {
          "name": "Exercise",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": null,
          "rest": "3:00",
          "cues": [
            "Full ROM",
            "Stretch at bottom",
            "Chest up",
            "Drive elbows down",
            "No kipping",
            "Reduce assistance before adding reps if reps stalli"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "fail",
          "action": "supplemental",
          "assess": "Most recent primary session: load and reps and rpe not recorded.",
          "rationale": "<b>\u2717 QC fail: insufficient_reference_input, missing(load), missing(reps), missing(rpe), reference_missing(target=exercise)</b> \u00b7 Cannot prescribe supplemental volume for Exercise: the primary reference session's load and reps and rpe were not logged for this exercise. No load, rep or RPE target is being asserted from missing data.",
          "when_to_add_load": "Progression criterion unavailable until a valid working set is logged.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 200,
                "reps": 10,
                "rpe": 5
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "W",
              "last": {
                "lbs": 175,
                "reps": 6,
                "rpe": 6
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "T",
              "last": {
                "lbs": 150,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 4,
              "last": {
                "lbs": 175,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            }
          ],
          "volumeLbs": 3550.0,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=supplemental_volume).",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "supplemental_volume",
          "roleSource": "recovery_override",
          "roleConfidence": "medium",
          "primaryReference": null,
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Fatigue state for this occurrence: 'elevated'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 6 decided: fatigue_state=elevated with no qualifying history signal -> supplemental_volume."
          ],
          "futurePrescriptionRole": {
            "role": "supplemental_volume",
            "source": "recovery_override",
            "governingSource": "fatigue_l6",
            "change": "unchanged",
            "targetExposureDate": "2026-11-01",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
              "No qualifying prior exact-exercise exposure found.",
              "Fatigue state for this occurrence: 'elevated'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
              "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
              "Level 6 decided: fatigue_state=elevated with no qualifying history signal -> supplemental_volume.",
              "Forward projection: target exposure 2026-11-01 (source=estimated); governing source=fatigue_l6. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (supplemental_volume); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Exercise",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": null,
          "rest": "3:00",
          "cues": [
            "Stable torso",
            "Pull to low chest / upper abs",
            "No jerking",
            "Control eccentric",
            "Do not turn it into a hip hinge shrug"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "fail",
          "action": "supplemental",
          "assess": "Most recent primary session: load and reps and rpe not recorded.",
          "rationale": "<b>\u2717 QC fail: insufficient_reference_input, missing(load), missing(reps), missing(rpe), reference_missing(target=exercise)</b> \u00b7 Cannot prescribe supplemental volume for Exercise: the primary reference session's load and reps and rpe were not logged for this exercise. No load, rep or RPE target is being asserted from missing data.",
          "when_to_add_load": "Progression criterion unavailable until a valid working set is logged.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 88,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "W",
              "last": {
                "lbs": 126.5,
                "reps": 5,
                "rpe": 6
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "T",
              "last": {
                "lbs": 148.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 4,
              "last": {
                "lbs": 137.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            }
          ],
          "volumeLbs": 2860.0,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=supplemental_volume).",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "supplemental_volume",
          "roleSource": "recovery_override",
          "roleConfidence": "medium",
          "primaryReference": null,
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Fatigue state for this occurrence: 'elevated'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 6 decided: fatigue_state=elevated with no qualifying history signal -> supplemental_volume."
          ],
          "futurePrescriptionRole": {
            "role": "supplemental_volume",
            "source": "recovery_override",
            "governingSource": "fatigue_l6",
            "change": "unchanged",
            "targetExposureDate": "2026-11-01",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
              "No qualifying prior exact-exercise exposure found.",
              "Fatigue state for this occurrence: 'elevated'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
              "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
              "Level 6 decided: fatigue_state=elevated with no qualifying history signal -> supplemental_volume.",
              "Forward projection: target exposure 2026-11-01 (source=estimated); governing source=fatigue_l6. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (supplemental_volume); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Exercise",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": null,
          "rest": "2:30",
          "cues": [
            "Full stretch with shoulder extended",
            "Elbows fixed",
            "Supinate hard at top",
            "2\u20133 sec eccentric",
            "No shoulder movement"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 40 lb \u00d7 9 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 40 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (35) for 8-10 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 12 clean reps at 40 lb at RPE 9.5 or lower; then increase to 45 lb.",
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
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 40,
                "reps": 9,
                "rpe": 9
              },
              "prop": {
                "lbs": 40,
                "reps": "10\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 35,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 35,
                "reps": "8\u201310",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 640.0,
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
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
            "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day)."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "fallback",
            "governingSource": "fallback_l8",
            "change": "unchanged",
            "targetExposureDate": "2026-11-01",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
              "No qualifying prior exact-exercise exposure found.",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
              "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
              "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
              "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day).",
              "Forward projection: target exposure 2026-11-01 (source=estimated); governing source=fallback_l8. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Exercise",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": null,
          "rest": "2:30",
          "cues": [
            "Stretch at bottom",
            "Drive elbow back",
            "No torso rotation",
            "Keep ribcage locked",
            "Control lowering"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 85 lb \u00d7 12 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set 85\u00d712 at RPE 9 (\u2265 anchor 12), backoffs productive \u2014 top set 85\u219290; +5.9% load costs ~2 reps, so the rep target drops 12\u219210 [range 8-10]. Back-off earned its own jump too \u2014 80 for 10-12, rebuilding to the reps it just produced.",
          "when_to_add_load": "Reach 12 clean reps at 85 lb at RPE 9.5 or lower; then increase to 90 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 45,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 50,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "W",
              "last": {
                "lbs": 65,
                "reps": 5,
                "rpe": 6
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 85,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 90,
                "reps": "8\u201310",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 4,
              "last": {
                "lbs": 70,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 80,
                "reps": "10\u201312",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 1860.0,
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
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
            "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day)."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "fallback",
            "governingSource": "fallback_l8",
            "change": "unchanged",
            "targetExposureDate": "2026-11-01",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
              "No qualifying prior exact-exercise exposure found.",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
              "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
              "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
              "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day).",
              "Forward projection: target exposure 2026-11-01 (source=estimated); governing source=fallback_l8. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Exercise",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": null,
          "rest": "2:00",
          "cues": [
            "Neutral grip fixed",
            "Elbow slightly forward",
            "No torso swing",
            "Control eccentric",
            "Keep tension on brachialis"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 35 lb \u00d7 12 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set 35\u00d712 at RPE 9 (\u2265 anchor 12), backoffs productive \u2014 top set 35\u219240; +14.3% load costs ~5 reps, so the rep target drops 12\u21927 [range 5-7]. Back-off earned its own jump too \u2014 35 for 10-12, rebuilding to the reps it just produced.",
          "when_to_add_load": "Reach 12 clean reps at 35 lb at RPE 9.5 or lower; then increase to 40 lb.",
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
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 35,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 40,
                "reps": "5\u20137",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 30,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 35,
                "reps": "10\u201312",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 780.0,
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
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
            "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day)."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "fallback",
            "governingSource": "fallback_l8",
            "change": "unchanged",
            "targetExposureDate": "2026-11-01",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
              "No qualifying prior exact-exercise exposure found.",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
              "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
              "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
              "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day).",
              "Forward projection: target exposure 2026-11-01 (source=estimated); governing source=fallback_l8. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        }
      ],
      "sequencingAdvisory": null
    },
    {
      "day": "C",
      "title": "DAY C \u2014 DELTS / ABS",
      "date": "2026-10-27",
      "sessionRole": "primary",
      "sessionRoleSource": "scheduled_slot",
      "sessionRoleWarnings": [],
      "prevDate": "2026-10-23",
      "nextAvailable": {
        "earliest": "2026-10-31",
        "latest": "2026-11-01",
        "fatigue_state": "moderate",
        "driver": "delts recovery (heavy stimulus, moderate fatigue, ~76h)"
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
        "generated_at": "2026-10-30T20:35:35.430133",
        "fatigue_signal": null,
        "fatigue_accumulation": null,
        "deload_state": null,
        "deload_signal_secondary": null,
        "stimulus_fatigue": null,
        "advisory_decision": null,
        "anomalies": null,
        "component_status": {
          "fatigue_taxonomy": "ok",
          "fatigue_accumulation": "unavailable",
          "fatigue_signal": "unavailable",
          "exercise_response_state": "unavailable",
          "deload_state": "unavailable"
        },
        "thresholds": {
          "global_fatigue_score": {
            "scale": "unbounded_sum",
            "med": 4.5,
            "high": 5.5
          },
          "recovery_debt": {
            "scale": "unbounded_decaying_accumulator",
            "med": 1.5,
            "high": 2.5,
            "baseline": 4.0,
            "decay": 0.7
          },
          "regress_ratio": {
            "scale": "ratio_0_1",
            "med": 0.3,
            "high": 0.5
          }
        },
        "is_advisory": true
      },
      "stats": [
        "44m",
        "11 sets",
        "9.7k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY C \u2014 DELTS / ABS \u2014 5 load\u2191 \u00b7 0 rep\u2191 \u00b7 0 hold.",
        "assess": "5 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>4/5</b> prescriptions passed the validation gate; <b>1 flagged</b> \u2014 see the \u2717 tags below.",
        "nonPrimaryExcluded": 0
      },
      "exercises": [
        {
          "name": "Exercise",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": null,
          "rest": "2:00",
          "cues": [
            "Lead with elbows",
            "Stop if traps take over",
            "2\u20133 sec eccentric",
            "No tempo breaks",
            "Constant tension"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "fail",
          "action": "increase_load",
          "assess": "Last top set: 30 lb \u00d7 12 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2717 QC fail: dropped_working_set(performed=3,slots=2)</b> \u00b7 Top set 30\u00d712 at RPE 9 (\u2265 anchor 12), backoffs productive \u2014 top set 30\u219235; +16.7% load costs ~6 reps, so the rep target drops 12\u21926 [range 4-6]. Back-off earned its own jump too \u2014 30 for 11-13, rebuilding to the reps it just produced.",
          "when_to_add_load": "Reach 12 clean reps at 30 lb at RPE 9.5 or lower; then increase to 35 lb.",
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
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 30,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 35,
                "reps": "4\u20136",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 25,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 30,
                "reps": "11\u201313",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 4,
              "last": {
                "lbs": 22.5,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 977.5,
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
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
            "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day)."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "fallback",
            "governingSource": "fallback_l8",
            "change": "unchanged",
            "targetExposureDate": "2026-10-31",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
              "No qualifying prior exact-exercise exposure found.",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
              "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
              "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
              "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day).",
              "Forward projection: target exposure 2026-10-31 (source=estimated); governing source=fallback_l8. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Exercise",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": null,
          "rest": "1:30",
          "cues": [
            "Step out to create bottom tension",
            "Smooth tempo",
            "No slack at bottom",
            "No torso sway",
            "Keep delts loaded throughout"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 75 lb \u00d7 13 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set 75\u00d713 at RPE 9 (\u2265 anchor 12), backoffs productive \u2014 top set 75\u219280; +6.7% load costs ~2 reps, so the rep target drops 13\u219211 [range 8-11]. Back-off earned its own jump too \u2014 70 for 15-17, rebuilding to the reps it just produced.",
          "when_to_add_load": "Reach 12 clean reps at 75 lb at RPE 9.5 or lower; then increase to 80 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 55,
                "reps": 8,
                "rpe": 6
              },
              "prop": {
                "lbs": 45,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 80,
                "reps": "8\u201311",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 2,
              "last": {
                "lbs": 75,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 70,
                "reps": "15\u201317",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 65,
                "reps": 17,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 2080.0,
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
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
            "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day)."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "fallback",
            "governingSource": "fallback_l8",
            "change": "unchanged",
            "targetExposureDate": "2026-10-31",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
              "No qualifying prior exact-exercise exposure found.",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
              "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
              "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
              "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day).",
              "Forward projection: target exposure 2026-10-31 (source=estimated); governing source=fallback_l8. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Exercise",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": null,
          "rest": "1:30",
          "cues": [
            "Chest supported or hinged",
            "No trap dominance",
            "1-sec squeeze at top",
            "Control lowering",
            "Raise through rear delt, not hands"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 30 lb \u00d7 12 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set 30\u00d712 at RPE 9 (\u2265 anchor 12), backoffs productive \u2014 top set 30\u219235; +16.7% load costs ~6 reps, so the rep target drops 12\u21926 [range 4-6]. Back-off earned its own jump too \u2014 30 for 11-13, rebuilding to the reps it just produced.",
          "when_to_add_load": "Reach 12 clean reps at 30 lb at RPE 9.5 or lower; then increase to 35 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 15,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 20,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 30,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 35,
                "reps": "4\u20136",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 27.5,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 30,
                "reps": "11\u201313",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 717.5,
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
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
            "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day)."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "fallback",
            "governingSource": "fallback_l8",
            "change": "unchanged",
            "targetExposureDate": "2026-10-31",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
              "No qualifying prior exact-exercise exposure found.",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
              "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
              "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
              "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day).",
              "Forward projection: target exposure 2026-10-31 (source=estimated); governing source=fallback_l8. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Exercise",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": null,
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 65 lb \u00d7 14 @ RPE 8 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set 65\u00d714 at RPE 8 (\u2265 anchor 12), backoffs productive \u2014 top set 65\u219270; +7.7% load costs ~3 reps, so the rep target drops 14\u219211 [range 8-11]. Back-off earned its own jump too \u2014 65 for 10-12, rebuilding to the reps it just produced.",
          "when_to_add_load": "Reach 12 clean reps at 65 lb at RPE 9.5 or lower; then increase to 70 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 40,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 70,
                "reps": "8\u201311",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 1,
              "last": {
                "lbs": 45,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 65,
                "reps": "10\u201312",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": 2,
              "last": {
                "lbs": 65,
                "reps": 14,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 55,
                "reps": 12,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 1930.0,
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
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Fatigue state for this occurrence: 'low'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
            "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day)."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "fallback",
            "governingSource": "fallback_l8",
            "change": "unchanged",
            "targetExposureDate": "2026-10-31",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
              "No qualifying prior exact-exercise exposure found.",
              "Fatigue state for this occurrence: 'low'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
              "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
              "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
              "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day).",
              "Forward projection: target exposure 2026-10-31 (source=estimated); governing source=fallback_l8. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Exercise",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": null,
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
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 275 lb \u00d7 16 @ RPE 8 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u26a0 QC warn \u2014 set_role_conflict(warmup_labeled_set_at_working_effort(set 1 @ RPE 8))</b> \u00b7 Top set 275\u00d716 at RPE 8 (\u2265 anchor 12), backoffs productive \u2014 top set 275\u2192280; +1.8% load costs ~1 rep, so the rep target drops 16\u219215 [range 8-15]. Back-off earned its own jump too \u2014 250 for 14-16, rebuilding to the reps it just produced.",
          "when_to_add_load": "Reach 12 clean reps at 275 lb at RPE 9.5 or lower; then increase to 280 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 275,
                "reps": 16,
                "rpe": 8
              },
              "prop": {
                "lbs": 155,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 280,
                "reps": "8\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 2,
              "last": {
                "lbs": 250,
                "reps": 16,
                "rpe": 8
              },
              "prop": {
                "lbs": 250,
                "reps": "14\u201316",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 4000.0,
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
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Fatigue state for this occurrence: 'low'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
            "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day)."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "fallback",
            "governingSource": "fallback_l8",
            "change": "unchanged",
            "targetExposureDate": "2026-10-31",
            "targetDateSource": "estimated",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
              "No qualifying prior exact-exercise exposure found.",
              "Fatigue state for this occurrence: 'low'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
              "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
              "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
              "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day).",
              "Forward projection: target exposure 2026-10-31 (source=estimated); governing source=fallback_l8. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        }
      ],
      "sequencingAdvisory": null
    },
    {
      "day": "B",
      "title": "DAY B - CHEST / TRICEPS",
      "date": "2026-10-25",
      "sessionRole": "primary",
      "sessionRoleSource": "scheduled_slot",
      "sessionRoleWarnings": [],
      "prevDate": "2026-10-18",
      "nextAvailable": {
        "earliest": "2026-10-29",
        "latest": "2026-10-30",
        "fatigue_state": "moderate",
        "driver": "chest recovery (heavy stimulus, moderate fatigue, ~78h)"
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
        "generated_at": "2026-10-30T20:35:35.430133",
        "fatigue_signal": null,
        "fatigue_accumulation": null,
        "deload_state": null,
        "deload_signal_secondary": null,
        "stimulus_fatigue": null,
        "advisory_decision": null,
        "anomalies": null,
        "component_status": {
          "fatigue_taxonomy": "ok",
          "fatigue_accumulation": "unavailable",
          "fatigue_signal": "unavailable",
          "exercise_response_state": "unavailable",
          "deload_state": "unavailable"
        },
        "thresholds": {
          "global_fatigue_score": {
            "scale": "unbounded_sum",
            "med": 4.5,
            "high": 5.5
          },
          "recovery_debt": {
            "scale": "unbounded_decaying_accumulator",
            "med": 1.5,
            "high": 2.5,
            "baseline": 4.0,
            "decay": 0.7
          },
          "regress_ratio": {
            "scale": "ratio_0_1",
            "med": 0.3,
            "high": 0.5
          }
        },
        "is_advisory": true
      },
      "stats": [
        "58m",
        "8 sets",
        "11.0k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY B - CHEST / TRICEPS \u2014 1 load\u2191 \u00b7 2 rep\u2191 \u00b7 0 hold \u00b7 1 non-primary excluded.",
        "assess": "4 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>3/4</b> prescriptions passed the validation gate; <b>1 flagged</b> \u2014 see the \u2717 tags below.",
        "nonPrimaryExcluded": 1
      },
      "exercises": [
        {
          "name": "Exercise",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": null,
          "rest": "3:00",
          "cues": [
            "Shoulder blades set",
            "Lower under control",
            "Press through upper chest",
            "No bouncing",
            "Stop before bar speed dies"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "fail",
          "action": "supplemental",
          "assess": "Most recent primary session: load and reps and rpe not recorded.",
          "rationale": "<b>\u2717 QC fail: insufficient_reference_input, missing(load), missing(reps), missing(rpe), reference_missing(target=exercise)</b> \u00b7 Cannot prescribe supplemental volume for Exercise: the primary reference session's load and reps and rpe were not logged for this exercise. No load, rep or RPE target is being asserted from missing data.",
          "when_to_add_load": "Progression criterion unavailable until a valid working set is logged.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 88,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "W",
              "last": {
                "lbs": 121,
                "reps": 5,
                "rpe": 6
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "T",
              "last": {
                "lbs": 150,
                "reps": 7,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 4,
              "last": {
                "lbs": 137.5,
                "reps": 7,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            }
          ],
          "volumeLbs": 2012.5,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=supplemental_volume).",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "supplemental_volume",
          "roleSource": "recovery_override",
          "roleConfidence": "medium",
          "primaryReference": null,
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Fatigue state for this occurrence: 'elevated'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 6 decided: fatigue_state=elevated with no qualifying history signal -> supplemental_volume."
          ],
          "futurePrescriptionRole": {
            "role": "supplemental_volume",
            "source": "recovery_override",
            "governingSource": "fatigue_l6",
            "change": "unchanged",
            "targetExposureDate": "2026-10-30",
            "targetDateSource": "actual",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
              "No qualifying prior exact-exercise exposure found.",
              "Fatigue state for this occurrence: 'elevated'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
              "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
              "Level 6 decided: fatigue_state=elevated with no qualifying history signal -> supplemental_volume.",
              "Forward projection: target exposure 2026-10-30 (source=actual, session 78fadebc-9e24-4202-bfc0-2ec48bc25803); governing source=fatigue_l6. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (supplemental_volume); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Exercise",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": null,
          "rest": "2:30",
          "cues": [
            "Stretch focus",
            "Soft elbow bend fixed",
            "2\u20133 sec eccentric",
            "No pressing motion",
            "Stop short of shoulder irritation"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 50 lb \u00d7 8 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 50 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (45) for 8-10 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 12 clean reps at 50 lb at RPE 9.5 or lower; then increase to 55 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 30,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 30,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 50,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 50,
                "reps": "9\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 45,
                "reps": 8,
                "rpe": 8
              },
              "prop": {
                "lbs": 45,
                "reps": "8\u201310",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 760.0,
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
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
            "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day)."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "fallback",
            "governingSource": "fallback_l8",
            "change": "unchanged",
            "targetExposureDate": "2026-10-30",
            "targetDateSource": "actual",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
              "No qualifying prior exact-exercise exposure found.",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
              "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
              "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
              "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day).",
              "Forward projection: target exposure 2026-10-30 (source=actual, session 78fadebc-9e24-4202-bfc0-2ec48bc25803); governing source=fallback_l8. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Exercise",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": null,
          "rest": "2:30",
          "cues": [
            "Elbows fixed slightly in",
            "Full stretch behind head",
            "2\u20133 sec eccentric",
            "Pause in stretch",
            "No shoulder movement",
            "Keep tension on triceps"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 72.5 lb \u00d7 10 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 72.5 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (65) for 10-12 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 12 clean reps at 72.5 lb at RPE 9.5 or lower; then increase to 80 lb.",
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
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 72.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 72.5,
                "reps": "11\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 65,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 65,
                "reps": "10\u201312",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 1375.0,
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
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
            "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day)."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "fallback",
            "governingSource": "fallback_l8",
            "change": "unchanged",
            "targetExposureDate": "2026-10-30",
            "targetDateSource": "actual",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
              "No qualifying prior exact-exercise exposure found.",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
              "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
              "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
              "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day).",
              "Forward projection: target exposure 2026-10-30 (source=actual, session 78fadebc-9e24-4202-bfc0-2ec48bc25803); governing source=fallback_l8. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        },
        {
          "name": "Exercise",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": null,
          "rest": "2:00",
          "cues": [
            "Elbows pinned",
            "Full lockout",
            "Controlled return",
            "No shoulder roll",
            "Keep tension on triceps"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 300 lb \u00d7 12 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set 300\u00d712 at RPE 9 (\u2265 anchor 12), backoffs productive \u2014 top set 300\u2192305; +1.7% load costs ~1 rep, so the rep target drops 12\u219211 [range 8-11]. Back-off earned its own jump too \u2014 275 for 10-12, rebuilding to the reps it just produced.",
          "when_to_add_load": "Reach 12 clean reps at 300 lb at RPE 9.5 or lower; then increase to 305 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 200,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 170,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 300,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 305,
                "reps": "8\u201311",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 275,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 275,
                "reps": "10\u201312",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 6900.0,
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
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
            "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day)."
          ],
          "futurePrescriptionRole": {
            "role": "primary_progression",
            "source": "fallback",
            "governingSource": "fallback_l8",
            "change": "unchanged",
            "targetExposureDate": "2026-10-30",
            "targetDateSource": "actual",
            "projected": true,
            "band": null,
            "ceiling": null,
            "reasons": [
              "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
              "No qualifying prior exact-exercise exposure found.",
              "Fatigue state for this occurrence: 'moderate'.",
              "Recovery-hours band width for this occurrence (heavy stimulus, no muscle resolved, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 72h.",
              "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
              "Level 6: no qualifying history signal, and fatigue_state does not warrant an override; not deciding.",
              "Level 8 (fallback): no competing exposure, fatigue, or schedule evidence found at any level -> primary_progression (the ordinary case for a normal exercise on its normal day).",
              "Forward projection: target exposure 2026-10-30 (source=actual, session 78fadebc-9e24-4202-bfc0-2ec48bc25803); governing source=fallback_l8. No qualifying forward evidence at any tier (exact/muscle/cluster). Future role unchanged relative to the historical role (primary_progression); the historical occurrenceRole and the persisted table are unchanged."
            ]
          }
        }
      ],
      "sequencingAdvisory": null
    }
  ]
};
