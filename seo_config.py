import json
from datetime import datetime
from urllib.parse import urljoin

class SEOConfig:
    """SEO Configuration class for portfolio website"""
    
    # Basic Site Information
    SITE_NAME = "Zafar Portfolio"
    SITE_URL = "https://yourportfolio.com"  # Update this with your actual domain
    SITE_DESCRIPTION = "Portfolio of Zafar - AI/ML Engineer and Computer Science Student specializing in artificial intelligence, machine learning, and innovative technology solutions"
    
    # Author Information
    AUTHOR_NAME = "Zafar"
    AUTHOR_EMAIL = "mdzafarddd@gmail.com"
    AUTHOR_PHONE = "+919546299524"
    AUTHOR_LOCATION = "Haryana, India"
    
    # Social Media Profiles
    SOCIAL_PROFILES = {
        "github": "https://github.com/zafar-TechWizard",
        "linkedin": "https://www.linkedin.com/in/md-z-41687b157",
        "twitter": "",  # Add when available
        "instagram": ""  # Add when available
    }
    
    # Primary Keywords for SEO (Name-based + Skills)
    PRIMARY_KEYWORDS = [
        "Zafar",
        "Zafar AI ML",
        "Zafar ML",
        "Zafar developer",
        "Zafar Python developer",
        "Zafar AI engineer",
        "Zafar machine learning engineer",
        "Md Zafar",
        "Zafar computer science student",
        "Zafar Flask developer"
    ]
    
    # Long-tail Keywords (Name-based + Specific Skills)
    LONG_TAIL_KEYWORDS = [
        "Zafar AI ML engineer portfolio",
        "Zafar Python machine learning projects",
        "Zafar computer science MMU",
        "Zafar InfoLytix developer",
        "Zafar SOFI AI assistant",
        "Zafar ZenPulse mental health app",
        "Zafar TensorFlow developer",
        "Zafar data scientist portfolio",
        "Zafar SaaS developer India",
        "Zafar Flask web developer",
        "Zafar artificial intelligence projects",
        "Zafar machine learning internship"
    ]
    
    # Page-specific SEO Data
    PAGES_SEO = {
        "index": {
            "title": "Zafar - AI/ML Engineer & Computer Science Student | Portfolio",
            "description": "Passionate Computer Science student specializing in AI/ML, data science, and SaaS development. Explore my innovative projects including InfoLytix, SOFI AI Assistant, and ZenPulse. Available for internships and collaborations.",
            "keywords": "AI engineer, machine learning, data science, computer science student, Python developer, Flask developer, AI projects, SaaS development, portfolio, Zafar",
            "canonical": "/",
            "priority": 1.0,
            "changefreq": "weekly"
        },
        "about": {
            "title": "About Zafar - AI/ML Engineer & Computer Science Student | Skills & Experience",
            "description": "Learn about Zafar, a passionate Computer Science student and AI/ML engineer at Maharishi Markandeshwar University. Discover my expertise in Python, TensorFlow, Flask, machine learning, and innovative project portfolio.",
            "keywords": "Zafar about, AI ML engineer biography, computer science student India, Python developer skills, machine learning expertise, Flask developer, TensorFlow projects",
            "canonical": "/about/me",
            "priority": 0.8,
            "changefreq": "monthly"
        },
        "projects": {
            "title": "AI/ML Projects by Zafar - InfoLytix, SOFI, ZenPulse | Portfolio",
            "description": "Explore Zafar's portfolio of AI/ML projects including InfoLytix research assistant, SOFI AI assistant, ZenPulse mental health platform, and computer vision applications. Each project showcases innovative solutions and technical expertise.",
            "keywords": "AI ML projects, InfoLytix AI assistant, SOFI artificial intelligence, ZenPulse mental health app, Python projects, TensorFlow projects, Flask applications, machine learning portfolio",
            "canonical": "/work",
            "priority": 0.9,
            "changefreq": "weekly"
        },
        "contact": {
            "title": "Contact Zafar - AI/ML Engineer | Get in Touch for Collaborations",
            "description": "Get in touch with Zafar for AI/ML engineering opportunities, project collaborations, or internships. Available for innovative technology projects and data science consultations. Contact via email or LinkedIn.",
            "keywords": "contact Zafar, AI ML engineer contact, hire AI developer, machine learning consultant, computer science collaboration, Python developer contact",
            "canonical": "/cntct",
            "priority": 0.7,
            "changefreq": "monthly"
        }
    }
    
    # Technical SEO Settings
    TECHNICAL_SEO = {
        "robots_allow": True,
        "sitemap_enabled": True,
        "schema_markup": True,
        "open_graph": True,
        "twitter_cards": True,
        "canonical_urls": True,
        "meta_viewport": True,
        "charset_utf8": True,
        "lang_attribute": "en",
        "ssl_enabled": True,
        "gzip_compression": True,
        "cache_control": "public, max-age=300"
    }
    
    # Performance Optimization
    PERFORMANCE_CONFIG = {
        "image_optimization": True,
        "lazy_loading": True,
        "minify_css": False,  # Set to True in production
        "minify_js": False,   # Set to True in production
        "cdn_enabled": False, # Set to True when using CDN
        "preload_fonts": True,
        "preconnect_domains": [
            "https://fonts.googleapis.com",
            "https://fonts.gstatic.com",
            "https://cdnjs.cloudflare.com"
        ]
    }

    @classmethod
    def get_page_seo(cls, page_name):
        """Get SEO data for a specific page"""
        return cls.PAGES_SEO.get(page_name, {})
    
    @classmethod
    def generate_sitemap_urls(cls):
        """Generate URLs for sitemap"""
        urls = []
        for page_name, seo_data in cls.PAGES_SEO.items():
            urls.append({
                'loc': urljoin(cls.SITE_URL, seo_data['canonical']),
                'lastmod': datetime.now().strftime('%Y-%m-%d'),
                'changefreq': seo_data['changefreq'],
                'priority': seo_data['priority']
            })
        return urls
    
    @classmethod
    def get_structured_data_person(cls):
        """Generate Person structured data"""
        return {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": cls.AUTHOR_NAME,
            "alternateName": "Md Zafar",
            "description": "Computer Science Engineering student and AI/ML developer specializing in artificial intelligence, machine learning, and SaaS development",
            "url": cls.SITE_URL,
            "email": cls.AUTHOR_EMAIL,
            "telephone": cls.AUTHOR_PHONE,
            "address": {
                "@type": "PostalAddress",
                "addressRegion": "Haryana",
                "addressCountry": "India"
            },
            "sameAs": [url for url in cls.SOCIAL_PROFILES.values() if url],
            "jobTitle": "AI/ML Engineer & Computer Science Student",
            "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Python Programming",
                "Flask Development",
                "TensorFlow",
                "Data Science",
                "Computer Vision",
                "Natural Language Processing",
                "SaaS Development",
                "Web Development"
            ]
        }

# SEO Monitoring and Analytics
class SEOMonitoring:
    """SEO monitoring and analytics utilities"""
    
    @staticmethod
    def check_meta_tags(html_content):
        """Check if essential meta tags are present"""
        required_tags = [
            '<meta name="description"',
            '<meta name="keywords"',
            '<meta property="og:title"',
            '<meta property="og:description"',
            '<title>'
        ]
        
        missing_tags = []
        for tag in required_tags:
            if tag not in html_content:
                missing_tags.append(tag)
        
        return {
            'status': 'pass' if not missing_tags else 'fail',
            'missing_tags': missing_tags
        }
    
    @staticmethod
    def check_structured_data(html_content):
        """Check if structured data is present"""
        has_json_ld = 'application/ld+json' in html_content
        return {
            'status': 'pass' if has_json_ld else 'fail',
            'has_structured_data': has_json_ld
        }
    
    @staticmethod
    def generate_seo_report():
        """Generate basic SEO report"""
        report = {
            'timestamp': datetime.now().isoformat(),
            'site_url': SEOConfig.SITE_URL,
            'pages_configured': len(SEOConfig.PAGES_SEO),
            'primary_keywords': len(SEOConfig.PRIMARY_KEYWORDS),
            'social_profiles': len([url for url in SEOConfig.SOCIAL_PROFILES.values() if url]),
            'technical_seo_enabled': SEOConfig.TECHNICAL_SEO,
            'recommendations': [
                "Update SITE_URL with actual domain",
                "Add Twitter and Instagram profiles when available",
                "Enable minification and CDN in production",
                "Set up Google Analytics and Search Console",
                "Monitor page loading speed regularly",
                "Update sitemap.xml with actual URLs",
                "Submit sitemap to search engines"
            ]
        }
        return report

# Google Analytics and Search Console Integration
GOOGLE_ANALYTICS_CONFIG = {
    "enabled": False,  # Set to True when GA is set up
    "tracking_id": "",  # Add your GA tracking ID
    "gtag_config": {
        "anonymize_ip": True,
        "cookie_flags": "SameSite=None;Secure"
    }
}

GOOGLE_SEARCH_CONSOLE_CONFIG = {
    "enabled": False,  # Set to True when GSC is set up
    "verification_code": "",  # Add your GSC verification code
    "sitemap_submitted": False
}

# Additional SEO Tools Configuration
SEO_TOOLS_CONFIG = {
    "bing_webmaster": {
        "enabled": False,
        "verification_code": ""
    },
    "yandex_webmaster": {
        "enabled": False,
        "verification_code": ""
    },
    "schema_validator": "https://validator.schema.org/",
    "rich_results_test": "https://search.google.com/test/rich-results",
    "page_speed_insights": "https://pagespeed.web.dev/",
    "mobile_friendly_test": "https://search.google.com/test/mobile-friendly"
}

if __name__ == "__main__":
    # Generate and print SEO report
    report = SEOMonitoring.generate_seo_report()
    print("SEO Configuration Report:")
    print(json.dumps(report, indent=2))
