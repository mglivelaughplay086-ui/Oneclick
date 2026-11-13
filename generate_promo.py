import json
import datetime

def generate_marketing_hook(product_title, target_platform):
    hook_templates = {
        "TikTok": f"Stop scrolling if you want to master AI visuals. Here is a sneak peek inside the {product_title}.",
        "Instagram": f"Level up your workflow today. Grab the exact framework behind our latest release: {product_title}."
    }
    
    script_payload = {
        "timestamp": datetime.datetime.now().isoformat(),
        "platform": target_platform,
        "hook_text": hook_templates.get(target_platform, f"Check out {product_title}"),
        "call_to_action": "Tap the link in my bio to get instant access."
    }
    
    return json.dumps(script_payload, indent=4)

if __name__ == "__main__":
    promo_output = generate_marketing_hook("Cinematic Portrait Prompt Guide", "TikTok")
    print("Generated Promo Asset Payload:")
    print(promo_output)
