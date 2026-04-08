"""
Level 99 AI Prompt Evaluator
Purpose: Performance-optimized evaluation of LLM response quality.
Usage: python prompt-eval.py <test-data.json> <model-name>
"""

import sys
import json
import time

def evaluate_responses(test_file, model_name):
    """Evaluates the model against a test dataset."""
    print(f"🚀 Evaluating {model_name} with {test_file}...")

    try:
        with open(test_file, 'r') as f:
            test_data = json.load(f)
    except Exception as e:
        print(f"Error loading {test_file}: {e}")
        return

    results = []
    total_latency = 0

    for idx, item in enumerate(test_data):
        prompt = item['prompt']
        expected = item['expected']

        # Simulation of LLM call (Replace with actual OpenAI/Ollama call)
        start_time = time.time()
        actual = f"Model Output for {prompt}" # Placeholder
        latency = (time.time() - start_time) * 1000
        total_latency += latency

        # Accuracy Logic (Simple match for simulation)
        score = 1.0 if expected in actual else 0.0

        results.append({
            "id": idx,
            "prompt": prompt,
            "score": score,
            "latency_ms": latency
        })

    avg_score = sum(r['score'] for r in results) / len(results)
    avg_latency = total_latency / len(results)

    print(f"%c 🎯 Final Score: {avg_score:.2f} | ⚡ Avg Latency: {avg_latency:.2f}ms ", "color: #fff; font-weight: bold; background: #22c55e;")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        # Generate dummy data if no file provided for demo
        dummy = [{"prompt": "Who is the CEO of Apple?", "expected": "Tim Cook"}]
        with open('dummy-test.json', 'w') as f:
            json.dump(dummy, f)
        evaluate_responses('dummy-test.json', 'gpt-4o-mini')
    else:
        evaluate_responses(sys.argv[1], sys.argv[2])
