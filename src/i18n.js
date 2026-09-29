// Internationalization support for Tools Code

// Translation texts
const translations = {
    en: {
        // Common
        navHome: 'Home',
        navTools: 'Tools',
        navResources: 'Resources',
        navAbout: 'About Us',
        navContact: 'Contact',
        
        // New navigation keys
        nav: {
            home: 'Home',
            tools: 'Tools',
            resources: 'Resources',
            about: 'About Us',
            contact: 'Contact'
        },
        
        // Home page
        heroTitle: 'Essential Developer Tools & Resources',
        heroSubtitle: 'A collection of useful tools and resources for developers',
        sectionTools: 'Tools',
        sectionResources: 'Resources',
        sectionAbout: 'About Us',
        
        // Homepage tool descriptions
        tools: {
            m3u8Player: 'M3u8 Player',
            m3u8Desc: 'Play M3u8 streams easily in your browser',
            jsonValidator: 'JSON Validator',
            jsonDesc: 'Validate and beautify your JSON data with ease',
            colorPicker: 'Color Picker',
            colorDesc: 'Find the perfect color scheme for your projects',
            regexTester: 'Regex Tester',
            regexDesc: 'Test and debug your regular expressions in real-time',
            base64: 'Base64 Encoder/Decoder',
            base64Desc: 'Encode and decode Base64 strings quickly',
            timestamp: 'Timestamp Converter',
            timestampDesc: 'Convert timestamps to human-readable dates and vice versa'
        },
        
        // Homepage resource descriptions
        resources: {
            codeSnippets: 'Code Snippets',
            codeSnippetsDesc: 'A collection of useful code snippets for various programming languages',
            apiDocs: 'API Documentation',
            apiDocsDesc: 'Collection of official API documentation links for developers to quickly find documentation for various technologies',
            tutorials: 'Tutorials & Guides',
            tutorialsDesc: 'Step-by-step tutorials and guides for various development topics',
            libraries: 'Useful Libraries',
            librariesDesc: 'Curated list of useful libraries and frameworks for developers'
        },
        
        // M3U8 Player
        m3u8Title: 'M3U8 Player',
        m3u8Subtitle: 'Stream and play M3U8 video playlists directly in your browser',
        m3u8SectionTitle: 'Stream M3U8 Playlists',
        m3u8SectionDesc: 'Enter an M3U8 playlist URL below to start streaming video content in your browser.',
        m3u8UrlLabel: 'M3U8 Playlist URL',
        m3u8UrlPlaceholder: 'https://example.com/playlist.m3u8',
        m3u8LoadBtn: 'Load Playlist',
        m3u8StopBtn: 'Stop Playback',
        m3u8PlayerTitle: 'Video Player',
        m3u8StatusTitle: 'Player Status',
        m3u8StatusReady: 'Ready',
        m3u8StatusLoading: 'Loading playlist...',
        m3u8StatusPlaying: 'Playing',
        m3u8StatusError: 'Error loading playlist',
        m3u8StatusNoUrl: 'Please enter a valid M3U8 URL',
        
        // Color Picker
        colorPicker: {
            title: 'Color Picker',
            description: 'Find the perfect color scheme for your projects',
            pickColors: 'Pick Colors',
            instructions: 'Select colors using the color picker or enter color codes directly. You can also generate color schemes and save your favorite colors.',
            colorPreview: 'Color Preview',
            colorPicker: 'Color Picker',
            schemeGenerator: 'Color Scheme Generator',
            schemeDescription: 'Generate a color scheme based on your selected color.',
            colorHistory: 'Color History',
            copy: 'Copy'
        },
        
        // Contact
        contact: {
            title: 'Contact Us',
            description: 'Get in touch with us for any questions or feedback',
            sendMessage: 'Send Us a Message',
            name: 'Name',
            email: 'Email',
            subject: 'Subject',
            message: 'Message',
            sendMessageBtn: 'Send Message',
            contactInfo: 'Contact Information'
        },
        
        // About
        about: {
            title: 'About Us',
            description: 'Learn more about Tools Code and our mission',
            mission: 'Our Mission',
            missionDesc1: 'Tools Code is dedicated to providing developers with high-quality tools and resources to streamline their workflow and enhance their productivity. Our mission is to create a comprehensive platform that caters to the needs of developers at all skill levels.',
            missionDesc2: 'We believe that the right tools can make a significant difference in the development process, allowing developers to focus on what they do best: creating amazing software.',
            values: 'Our Values',
            valueQuality: 'Quality: We strive to deliver the highest quality tools and resources',
            valueAccessibility: 'Accessibility: We make our tools accessible to developers of all skill levels',
            valueInnovation: 'Innovation: We continuously improve and add new features to our tools',
            valueCommunity: 'Community: We value feedback and contributions from the developer community'
        },
        
        // Home
        home: {
            heroTitle: 'Welcome to Tools Code',
            heroSubtitle: 'A collection of essential tools and resources for developers',
            exploreTools: 'Explore Tools',
            browseResources: 'Browse Resources',
            sectionTools: 'Essential Developer Tools',
            sectionResources: 'Developer Resources',
            sectionAbout: 'About Tools Code',
            aboutDesc1: 'Tools Code is dedicated to providing developers with high-quality tools and resources to streamline their workflow and enhance their productivity. Our mission is to create a comprehensive platform that caters to the needs of developers at all skill levels.',
            aboutDesc2: 'Whether you\'re a beginner looking to learn the basics or an experienced developer seeking advanced tools, Tools Code has something for everyone.'
        },
        
        // Footer
        footer: {
            title: 'Tools Code',
            description: 'Essential tools and resources for developers.',
            tools: 'Tools',
            resources: 'Resources',
            company: 'Company',
            copyright: '© 2026 Tools Code. All rights reserved.',
            m3u8Player: 'M3U8 Player',
            jsonValidator: 'JSON Validator',
            colorPicker: 'Color Picker',
            regexTester: 'Regex Tester',
            timestampConverter: 'Timestamp Converter',
            base64EncoderDecoder: 'Base64 Encoder/Decoder',
            codeSnippets: 'Code Snippets',
            apiDocumentation: 'API Documentation',
            tutorialsGuides: 'Tutorials & Guides',
            usefulLibraries: 'Useful Libraries',
            aboutUs: 'About Us',
            contact: 'Contact',
            privacyPolicy: 'Privacy Policy',
            termsOfService: 'Terms of Service'
        },
        
        // Language toggle
        langEnglish: 'English',
        langChinese: '中文',
        
        // Button and link text
        buttons: {
            tryNow: 'Try it now →',
            browseSnippets: 'Browse Snippets →',
            viewDocumentation: 'View Documentation →',
            exploreTutorials: 'Explore Tutorials →',
            viewLibraries: 'View Libraries →'
        },
        
        // JSON Validator
        jsonValidator: {
            title: 'JSON Validator',
            subtitle: 'Validate, beautify, and manipulate your JSON data with ease',
            sectionTitle: 'Validate JSON',
            description: 'Enter your JSON data below and click "Validate" to check if it\'s valid. You can also beautify, compress, or unescape your JSON.',
            inputLabel: 'JSON Input',
            validateBtn: 'Validate',
            beautifyBtn: 'Beautify',
            compressBtn: 'Compress',
            unescapeBtn: 'Unescape',
            copyResultBtn: 'Copy Result',
            resultLabel: 'Result',
            errorEnterData: 'Please enter JSON data',
            errorInvalidJson: 'Error',
            successValid: 'JSON is valid!',
            successBeautified: 'JSON beautified successfully!',
            successCompressed: 'JSON compressed successfully!',
            successUnescaped: 'JSON unescaped successfully!',
            successCopied: 'Result copied to clipboard!',
            errorNoResult: 'No result to copy',
            errorCopyFailed: 'Failed to copy result'
        },
        
        // Regex Tester
        regexTester: {
            title: 'Regex Tester',
            subtitle: 'Test and debug your regular expressions in real-time',
            sectionTitle: 'Test Regular Expressions',
            description: 'Enter your regular expression and test string below to see the matches in real-time. You can also select various regex flags to modify the behavior.',
            regexLabel: 'Regular Expression',
            regexPlaceholder: 'Enter regex pattern',
            flagsLabel: 'Flags',
            flagGlobal: 'Global (g) - Find all matches',
            flagInsensitive: 'Case-insensitive (i) - Ignore case',
            flagMultiline: 'Multiline (m) - ^ and $ match start/end of line',
            flagDotall: 'Dotall (s) - . matches newlines',
            flagUnicode: 'Unicode (u) - Enable Unicode support',
            flagSticky: 'Sticky (y) - Match from last index',
            testString: 'Test String',
            testStringPlaceholder: 'Enter text to test your regex against',
            testBtn: 'Test Regex',
            results: 'Results',
            resultsPlaceholder: 'Enter a regex pattern and test string, then click "Test Regex" to see results.',
            commonPatterns: 'Common Regex Patterns',
            email: 'Email',
            url: 'URL',
            phoneUs: 'Phone Number (US)',
            date: 'Date (MM/DD/YYYY)',
            ipAddress: 'IP Address',
            password: 'Password (Strong)',
            usePattern: 'Use Pattern',
            examplesTitle: 'Common Regex Patterns',
            exampleEmail: 'Email',
            exampleUrl: 'URL',
            examplePhone: 'Phone Number (US)',
            exampleDate: 'Date (MM/DD/YYYY)',
            exampleIp: 'IP Address',
            examplePassword: 'Password (Strong)',
            errorEnterPattern: 'Please enter a regex pattern',
            noMatches: 'No matches found',
            foundMatches: 'Found {{count}} match(es):',
            matchLabel: 'Match {{num}}',
            indexLabel: 'Index',
            groupsLabel: 'Groups',
            highlightedLabel: 'Highlighted Matches:',
            errorLabel: 'Error'
        },
        
        // Base64 Encoder/Decoder
        base64: {
            title: 'Base64 Encoder/Decoder',
            subtitle: 'Encode and decode Base64 strings quickly and easily',
            sectionTitle: 'Encode and Decode Base64',
            description: 'Enter text to encode or Base64 string to decode below.',
            textToBase64: 'Text to Base64',
            textLabel: 'Text',
            textPlaceholder: 'Enter text to encode',
            encodeBtn: 'Encode',
            resultLabel: 'Result',
            copyBtn: 'Copy',
            base64ToText: 'Base64 to Text',
            base64Label: 'Base64',
            base64Placeholder: 'Enter Base64 to decode',
            decodeBtn: 'Decode',
            errorEnterText: 'Please enter text to encode',
            errorEnterBase64: 'Please enter Base64 to decode',
            errorEncoding: 'Error encoding text',
            errorDecoding: 'Error decoding Base64'
        },
        
        // Timestamp Converter
        timestamp: {
            title: 'Timestamp Converter',
            subtitle: 'Convert timestamps to human-readable dates and vice versa',
            sectionTitle: 'Convert Timestamps',
            description: 'Enter a timestamp or date below to convert between Unix timestamps and human-readable dates.',
            timestampToDate: 'Timestamp to Date',
            timestampLabel: 'Timestamp',
            timestampPlaceholder: 'Enter timestamp (e.g. 1609459200)',
            convertToDateBtn: 'Convert to Date',
            dateToTimestamp: 'Date to Timestamp',
            dateLabel: 'Date',
            datePlaceholder: 'Select a date',
            convertToTimestampBtn: 'Convert to Timestamp',
            resultLabel: 'Result',
            copyBtn: 'Copy',
            currentTimestamp: 'Current Timestamp',
            currentTimestampLabel: 'Current Unix Timestamp',
            errorEnterTimestamp: 'Please enter a timestamp',
            errorInvalidTimestamp: 'Invalid timestamp',
            errorSelectDate: 'Please select a date',
            errorInvalidDate: 'Invalid date'
        },
        
        // Code Snippets
        codeSnippets: {
            title: 'Code Snippets',
            subtitle: 'A collection of useful code snippets for various programming languages',
            html: 'HTML',
            css: 'CSS',
            javascript: 'JavaScript',
            python: 'Python',
            responsiveNavbar: 'Responsive Navbar',
            responsiveNavbarDesc: 'A responsive navbar with mobile menu toggle',
            cardComponent: 'Card Component',
            cardComponentDesc: 'A responsive card component with image and content',
            flexboxCenter: 'Flexbox Center',
            flexboxCenterDesc: 'Center elements horizontally and vertically using flexbox',
            responsiveGrid: 'Responsive Grid',
            responsiveGridDesc: 'A responsive grid layout using CSS Grid',
            fetchApi: 'Fetch API',
            fetchApiDesc: 'Make HTTP requests using Fetch API',
            debounceFunction: 'Debounce Function',
            debounceFunctionDesc: 'A debounce function to limit the rate at which a function can fire',
            flaskApp: 'Flask App',
            flaskAppDesc: 'A simple Flask web application',
            readJsonFile: 'Read JSON File',
            readJsonFileDesc: 'Read and parse a JSON file in Python',
            aboutPage: 'About This Page',
            aboutPageDesc1: 'This page collects useful code snippets for various programming languages, making it easy for developers to quickly find and use code snippets for common tasks.',
            aboutPageDesc2: 'All code snippets are tested and ready to use in your projects.'
        },
        
        // API Documentation
        apiDocs: {
            title: 'API Documentation List',
            subtitle: 'Collection of official API documentation links for developers to quickly find documentation for various technologies',
            frontendTech: 'Frontend Technologies',
            backendTech: 'Backend Technologies',
            databases: 'Databases',
            devTools: 'Development Tools',
            htmlDesc: 'HyperText Markup Language official documentation',
            cssDesc: 'Cascading Style Sheets official documentation',
            javascriptDesc: 'JavaScript official documentation',
            reactDesc: 'React official documentation',
            vueDesc: 'Vue.js official documentation',
            angularDesc: 'Angular official documentation',
            nodejsDesc: 'Node.js official documentation',
            expressDesc: 'Express.js official documentation',
            pythonDesc: 'Python official documentation',
            djangoDesc: 'Django official documentation',
            flaskDesc: 'Flask official documentation',
            phpDesc: 'PHP official documentation',
            laravelDesc: 'Laravel official documentation',
            javaDesc: 'Java official documentation',
            springDesc: 'Spring Framework official documentation',
            mysqlDesc: 'MySQL official documentation',
            postgresqlDesc: 'PostgreSQL official documentation',
            mongodbDesc: 'MongoDB official documentation',
            redisDesc: 'Redis official documentation',
            gitDesc: 'Git official documentation',
            dockerDesc: 'Docker official documentation',
            kubernetesDesc: 'Kubernetes official documentation',
            viewDocs: 'View Documentation →'
        },
        
        // Useful Libraries
        usefulLibraries: {
            title: 'Useful Libraries',
            subtitle: 'Curated list of useful libraries and frameworks for developers',
            frontendLibs: 'Frontend Libraries',
            backendLibs: 'Backend Libraries',
            utilsLibs: 'Utility Libraries',
            testingLibs: 'Testing Libraries',
            lodashDesc: 'A modern JavaScript utility library delivering modularity, performance & extras',
            momentDesc: 'Parse, validate, manipulate, and display dates in JavaScript',
            axiosDesc: 'Promise based HTTP client for the browser and node.js',
            reactQueryDesc: 'Hooks for fetching, caching and updating asynchronous data in React',
            expressDesc: 'Fast, unopinionated, minimalist web framework for Node.js',
            nestjsDesc: 'A progressive Node.js framework for building efficient, scalable applications',
            fastifyDesc: 'Fast and low overhead web framework, for Node.js',
            typeormDesc: 'ORM for TypeScript and JavaScript (ES7, ES6, ES5)',
            jestDesc: 'Delightful JavaScript Testing Framework with a focus on simplicity',
            mochaDesc: 'Simple, flexible, fun JavaScript test framework for Node.js & The Browser',
            cypressDesc: 'Fast, easy and reliable testing for anything that runs in a browser',
            puppeteerDesc: 'Headless Chrome Node API',
            viewDocs: 'View Documentation →',
            viewRepo: 'View Repository →'
        },
        
        // Libraries page
        libraries: {
            title: 'Useful Libraries',
            subtitle: 'Curated list of useful libraries and frameworks for developers',
            frontend: 'Frontend Libraries',
            backend: 'Backend Libraries',
            database: 'Database Libraries',
            devops: 'DevOps & Tools',
            reactLibraries: 'React Libraries',
            vueLibraries: 'Vue Libraries',
            generalFrontend: 'General Frontend',
            nodeLibraries: 'Node.js Libraries',
            pythonLibraries: 'Python Libraries',
            javaLibraries: 'Java Libraries',
            sqlLibraries: 'SQL Libraries',
            nosqlLibraries: 'NoSQL Libraries',
            devopsLibraries: 'DevOps Libraries',
            testingLibraries: 'Testing Libraries',
            aboutTitle: 'About This Page',
            aboutDesc1: 'This page provides a curated list of useful libraries and frameworks across different technologies and domains.',
            aboutDesc2: 'All links point to official library websites or documentation, ensuring developers have access to the latest information.'
        },
        
        // Articles
        articles: {
            title: 'Articles',
            subtitle: 'Step-by-step tutorials and guides for various development topics',
            heroTitle: 'Articles & Tutorials',
            heroSubtitle: 'Explore our collection of tutorials, guides, and articles for developers',
            latestArticles: 'Latest Articles',
            readMore: 'Read More →',
            noArticles: 'No articles available at the moment.',
            hls: {
                title: 'HLS Protocol Principles and Implementation Details',
                category: 'Video Technology',
                content: {
                    section1: {
                        title: 'I. HLS Protocol Architecture Overview',
                        subsections: {
                            s11: {
                                title: '1.1 System Architecture Layers',
                                content: 'HLS (HTTP Live Streaming) protocol adopts a layered and decoupled design concept, and the entire system can be divided into three core layers:',
                                layers: {
                                    client: 'Client Layer (Player Layer)\nAVPlayer / ExoPlayer / hls.js / Shaka Player',
                                    delivery: 'Delivery Layer\nCDN Edge → Origin Shield → Packager',
                                    origin: 'Origin Layer\nEncoder → Segmenter → DRM Encryptor → Storage (TS/fMP4)'
                                },
                                coreConcepts: 'Core design concepts:',
                                concepts: [
                                    'HTTP transmission: Reuse existing web infrastructure, no dedicated streaming server required',
                                    'Segmented transmission: Split continuous streams into independent cacheable segments',
                                    'Adaptive Bitrate (ABR): Client intelligently selects optimal quality for network adaptation'
                                ]
                            },
                            s12: {
                                title: '1.2 Data Flow Overview',
                                content: 'Data flow direction:\nOriginal video input → Encoder (multi-bitrate) → Segmenter → Encryption (optional) → Storage\nPlayer ← CDN ← HTTP GET ← M3U8 index file + TS/fMP4 segments\nDecoding and rendering → Buffer management → ABR decision engine → Network request scheduling'
                            }
                        }
                    },
                    section2: {
                        title: 'II. Core Component Implementation Principles',
                        subsections: {
                            s21: {
                                title: '2.1 Segmenter Working Mechanism',
                                content: 'The segmenter is the core production component of the HLS system, responsible for converting continuous encoded streams into discrete segments.',
                                inputProcessing: {
                                    title: 'Input Processing Flow',
                                    content: '1. Data acquisition and synchronization',
                                    sources: [
                                        'RTMP streaming (live scenario)',
                                        'MPEG-TS over UDP (broadcast signal)',
                                        'MP4/MOV files (VOD scenario)',
                                        'SDI/HDMI capture card (professional production)'
                                    ],
                                    keyPoints: 'Key technical points:',
                                    points: [
                                        'Timestamp synchronization: Parse PCR (Program Clock Reference) or PTS/DTS to ensure audio-video synchronization',
                                        'GOP alignment: Detect I-Frame boundaries to ensure segments can start decoding from any point',
                                        'Buffer management: Maintain 3-5 second sliding window to smooth network jitter and encoding fluctuations'
                                    ]
                                },
                                slicingLogic: {
                                    title: 'Slicing Trigger Logic',
                                    code: '# Pseudo code: GOP-based slicing decision\ndef segment_trigger_policy():\n    if current_time - last_cut_time >= target_duration:\n        if current_frame.is_keyframe:  # Must cut at keyframe\n            execute_cut()\n            update_manifest()\n            reset_timer()\n        else:\n            wait_for_next_keyframe()  # Avoid non-keyframe cutting causing decoding errors'
                                },
                                outputFormats: {
                                    title: 'Output Encapsulation Format Evolution',
                                    table: {
                                        headers: ['Format', 'File Extension', 'Applicable Scenario', 'Features'],
                                        rows: [
                                            ['MPEG-TS', '.ts', 'Traditional HLS', 'Strong fault tolerance, supports decoding from any position, but higher overhead (~10%)'],
                                            ['fMP4', '.m4s', 'Modern HLS/CMAF', 'Shared storage with DASH, low overhead (~1%), supports independent segments'],
                                            ['CMAF', '.cmfv/.cmfa', 'Unified standard', 'HLS/DASH dual-protocol reuse, reduces storage cost by 50%']
                                        ]
                                    }
                                },
                                ffmpegExample: {
                                    title: 'FFmpeg Slicing Implementation Example',
                                    code: '# Traditional TS slicing (live)\nffmpeg -i input.mp4 -c:v libx264 -c:a aac \\\n  -f hls -hls_time 6 -hls_list_size 10 \\\n  -hls_flags delete_segments+program_date_time \\\n  -hls_segment_filename "live_%03d.ts" \\\n  playlist.m3u8\n\n# Modern fMP4 slicing (VOD)\nffmpeg -i input.mp4 -c:v libx264 -c:a aac \\\n  -f hls -hls_time 6 -hls_playlist_type vod \\\n  -hls_segment_type fmp4 \\\n  -hls_segment_filename "segment_%d.m4s" \\\n  -hls_flags independent_segments \\\n  master.m3u8'
                                }
                            },
                            s22: {
                                title: '2.2 Packager Workflow',
                                content: 'The packager is responsible for assembling encoded multi-bitrate streams into standard HLS manifests and segments.',
                                twoStageWorkflow: {
                                    title: 'Two-Stage Workflow (Modern Recommended Pattern)',
                                    stage1: 'Stage 1: Encoding → Multi-bitrate MP4 (Mezzanine files)\n- One-time high-cost transcoding\n- Master files for all ABR formats',
                                    stage2: 'Stage 2: Repackaging → HLS/DASH distribution format\n- Low-cost, fast format conversion\n- Supports Just-In-Time Packaging'
                                },
                                keyParameters: {
                                    title: 'Key Configuration Parameters:',
                                    params: [
                                        'hls_time: Target segment duration (2-6 seconds for live, 0.5-2 seconds for LL-HLS)',
                                        'hls_list_size: Number of segments retained in playlist (live sliding window size)',
                                        'hls_playlist_type: VOD (video-on-demand) or omitted (live)',
                                        'var_stream_map: Audio-video stream combination mapping, supports multi-audio track multiplexing'
                                    ]
                                }
                            }
                        }
                    },
                    section3: {
                        title: 'III. In-depth Analysis of Adaptive Bitrate (ABR) Algorithms',
                        subsections: {
                            s31: {
                                title: '3.1 ABR Decision Architecture',
                                content: 'ABR is the intelligent brain of HLS, dynamically adjusting video quality through real-time network state monitoring:',
                                architecture: 'ABR Controller\n\nThroughput Estimator ← Download speed measurement (EWMA filtering)\nBuffer Manager ← Current buffer duration/capacity (target: 30-45 seconds)\nDecision Engine ← Bitrate selection algorithm (BOLA/Throughput)\n\n↓\nBitrate decision output'
                            },
                            s32: {
                                title: '3.2 Mainstream ABR Algorithm Classification',
                                algorithms: {
                                    throughputBased: {
                                        title: '1. Throughput-Based',
                                        code: '# Principle: Select bitrate based on recent segment download speed\niestimated_bandwidth = α * current_speed + (1-α) * historical_avg\nselected_bitrate = max { r ∈ R | r < estimated_bandwidth * safety_margin }\n\n# Characteristics\n- Fast response, suitable for scenarios with剧烈 network fluctuations\n- Disadvantage: Prone to overreaction, causing frequent switching',
                                        content: 'Principle: Select bitrate based on recent segment download speed'
                                    },
                                    bufferBased: {
                                        title: '2. Buffer-Based',
                                        code: '# Principle: Decision based on buffer saturation\nif buffer_level < buffer_min:\n    selected_bitrate = lowest_quality  # Emergency downgrade\nelif buffer_level > buffer_max:\n    selected_bitrate = highest_quality # Safe upgrade\nelse:\n    selected_bitrate = f(buffer_level) # Smooth transition\n\n# Representative algorithm: BOLA (Buffer Occupancy based Lyapunov Algorithm)\n# Characteristics: Strong stability, avoids rebuffer, but may not fully utilize bandwidth',
                                        content: 'Principle: Decision based on buffer saturation'
                                    },
                                    hybrid: {
                                        title: '3. Hybrid Algorithm',
                                        code: '# Modern player mainstream solution (e.g., hls.js, Shaka Player)\ndecision_weight = w1 * throughput_score + w2 * buffer_score + w3 * QoE_score\n\n# QoE considerations:\n- Quality switching frequency (avoid "ping-pong effect")\n- Startup delay (first packet time)\n- Stalling count and duration',
                                        content: 'Modern player mainstream solution (e.g., hls.js, Shaka Player)'
                                    }
                                }
                            },
                            s33: {
                                title: '3.3 LL-HLS Low-Latency Scenario Optimization',
                                content: 'Low Latency HLS (LL-HLS) places higher demands on ABR algorithms:',
                                challenges: 'Challenges:\nBuffer is extremely small (usually within 3 seconds), traditional algorithm reaction time is insufficient\nFiner segment slicing (Partial Segment 0.2-0.5 seconds), measurement noise increases',
                                optimization: {
                                    title: 'Optimization Strategies:',
                                    code: '# Server-side preload hints\n#EXT-X-PRELOAD-HINT:TYPE=PART,URI="next_partial.m4s"\n\n# Client algorithm adjustments\n- Predict next independent frame (GOP boundary) arrival time\n- Calculate safe playback delay based on PART-HOLD-BACK\n- Fast downgrade: Immediately switch to lowest bitrate when buffer < 1 second'
                                }
                            }
                        }
                    },
                    section4: {
                        title: 'IV. Player Implementation Details',
                        subsections: {
                            s41: {
                                title: '4.1 Playback Engine Architecture',
                                content: 'Taking open-source hls.js as an example, analyze the internal implementation of modern HLS players:',
                                architecture: 'Application (UI Controls / Events)\n↓\nhls.js Core\n- Loader (HTTP/XHR) → Demuxer (TS/fMP4) → AbrController (bitrate decision)\n- Playlist Loader (M3U8 parsing) → Remuxer (to MP4) → StreamController (buffer/scheduling)\n↓\nBrowser MSE (Media Source Extensions API)\n↓\nVideo/Audio Decoder (Hardware Acceleration / Software)'
                            },
                            s42: {
                                title: '4.2 Key Implementation Mechanisms',
                                mechanisms: {
                                    dualBuffer: {
                                        title: '1. Dual Buffer Architecture',
                                        code: '// Logic buffer vs decoding buffer separation\nclass StreamBuffer {\n    constructor() {\n        this.appended = 0;    // Data already appended to MSE\n        this.buffered = 0;    // Browser actual decoding buffer\n        this.maxBufLen = 30;  // Target buffer duration (seconds)\n    }\n    \n    // Dynamic adjustment strategy\n    updateTargetDuration(networkSpeed) {\n        if (networkSpeed < 1.5 * currentBitrate) {\n            this.maxBufLen = Math.min(this.maxBufLen + 5, 60); // Conservative strategy\n        } else {\n            this.maxBufLen = Math.max(this.maxBufLen - 2, 15); // Aggressive strategy\n        }\n    }\n}'
                                    },
                                    seamlessSwitching: {
                                        title: '2. Seamless Switching',
                                        content: 'Keyframe alignment: All bitrates use the same GOP structure (e.g., 2-second GOP)\nPTS/DTS continuity: Maintain monotonically increasing timestamps during switching to avoid decoder reset\nBuffer overlap: After new bitrate segment download completes, switch at keyframe boundary, discard old buffer'
                                    },
                                    liveCatchup: {
                                        title: '3. Live Catchup Mechanism',
                                        code: '// Catchup logic when client delay is too large\nif (currentLatency > maxLatencyThreshold) {\n    // Method 1: Accelerate playback (1.1-1.5x speed)\n    video.playbackRate = 1.2;\n    \n    // Method 2: Skip segments (directly request latest SEQUENCE)\n    const liveEdgeSequence = getLatestSequence();\n    skipTo(liveEdgeSequence - 3); // Keep 3 segments buffer\n    \n    // Method 3: Server-side hint (EXT-X-SKIP)\n    requestPlaylistWithSkipHint();\n}'
                                    }
                                }
                            },
                            s43: {
                                title: '4.3 DRM Decryption Process',
                                content: 'HLS supports multiple content protection schemes, players need to integrate CDM (Content Decryption Module):',
                                decryptionFlow: {
                                    title: 'Decryption Flow:',
                                    steps: [
                                        'Encrypted content (AES-128/SAMPLE-AES)',
                                        'Get key (EXT-X-KEY URI)',
                                        'Key request (with authentication Token)',
                                        'Key response (16 bytes Key + IV)',
                                        'Extract sample data (NAL units)',
                                        'AES-128-CBC/CTR decryption',
                                        'Send to decoder'
                                    ]
                                },
                                fairplay: {
                                    title: 'FairPlay Special Handling (Apple Ecosystem):',
                                    points: [
                                        'Uses SAMPLE-AES encryption',
                                        'Triggers FairPlay CDM through skd:// key URI',
                                        'Supports SPC (Server Playback Context) and CKC (Content Key Context) exchange'
                                    ]
                                }
                            }
                        }
                    },
                    section5: {
                        title: 'V. Server-Side Implementation Architecture',
                        subsections: {
                            s51: {
                                title: '5.1 Live Production Link',
                                content: 'Signal source (RTMP/SRT) → Encoder (CPU/GPU) → Segmenter (FFmpeg/Elemental) → Storage/CDN (Origin/Edge)',
                                llhlsConfig: {
                                    title: 'Key Parameter Configuration (LL-HLS Scenario):',
                                    code: 'segment_duration: 2s          # Standard segment duration\npartial_segment_duration: 0.5s # Partial segment duration (LL-HLS)\nplaylist_depth: 6-8           # Playlist retained segments\npart_hold_back: 3.0s          # Recommended playback delay\ndelta_updates: enabled        # Delta updates reduce bandwidth'
                                }
                            },
                            s52: {
                                title: '5.2 Just-In-Time Packaging',
                                content: 'Modern architecture tends to store a single format (CMAF), real-time repackaging to HLS/DASH:',
                                advantages: 'Advantages:\nStorage cost reduced by 50% (no need to store both TS and fMP4)\nSupports multi-protocol immediate adaptation\nUnified DRM encryption processing',
                                architecture: 'Storage Layer (CMAF fMP4)\n↓\nPackager Edge\n- HLS Packager (.m3u8) | DASH Packager (.mpd)\n↓\nClient'
                            }
                        }
                    },
                    section6: {
                        title: 'VI. M3U8 Protocol Core Tags',
                        subsections: {
                            s61: {
                                title: '6.1 Master Playlist',
                                code: '#EXTM3U\n#EXT-X-VERSION:6\n#EXT-X-INDEPENDENT-SEGMENTS\n\n#EXT-X-STREAM-INF:BANDWIDTH=800000,RESOLUTION=640x360,CODECS="avc1.64001E,mp4a.40.2"\n360p.m3u8\n\n#EXT-X-STREAM-INF:BANDWIDTH=1400000,RESOLUTION=1280x720,CODECS="avc1.64001F,mp4a.40.2"\n720p.m3u8\n\n#EXT-X-STREAM-INF:BANDWIDTH=2800000,RESOLUTION=1920x1080,CODECS="avc1.640028,mp4a.40.2"\n1080p.m3u8'
                            },
                            s62: {
                                title: '6.2 Media Playlist',
                                code: '#EXTM3U\n#EXT-X-VERSION:6\n#EXT-X-TARGETDURATION:10\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-PLAYLIST-TYPE:VOD      # VOD=video-on-demand, omitted=live\n#EXT-X-INDEPENDENT-SEGMENTS\n#EXT-X-ENDLIST                # VOD end marker (not present in live)\n\n#EXTINF:9.976,                # Segment duration (seconds)\nsegment_000.ts\n#EXTINF:10.012,\nsegment_001.ts'
                            },
                            s63: {
                                title: '6.3 LL-HLS Specific Tags',
                                code: '#EXT-X-SERVER-CONTROL:CAN-BLOCK-RELOAD=YES,PART-HOLD-BACK=3.0\n#EXT-X-PART-INF:PART-TARGET=0.5\n#EXT-X-PART:DURATION=0.5,URI="segment0045_part3.m4s"\n#EXT-X-PRELOAD-HINT:TYPE=PART,URI="segment0045_part4.m4s"'
                            }
                        }
                    }
                }
            }
        },
        
        // Privacy Policy
        privacyPolicy: {
            title: 'Privacy Policy',
            subtitle: 'How we collect, use, and protect your information',
            intro: 'Tools Code is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our tools, or access our resources.',
            intro2: 'By using Tools Code, you consent to the practices described in this Privacy Policy.',
            informationCollection: 'Information We Collect',
            informationCollectionDesc: 'We may collect the following types of information:',
            personalInfo: 'Personal Information',
            personalInfoDesc: 'When you contact us, we may collect your name, email address, and any other information you provide.',
            usageData: 'Usage Data',
            usageDataDesc: 'We collect information about how you use our website, including pages visited, time spent on pages, and other browsing activities.',
            deviceInfo: 'Device Information',
            deviceInfoDesc: 'We may collect information about your device, including your IP address, browser type, operating system, and device identifiers.',
            informationUsage: 'How We Use Your Information',
            informationUsageDesc: 'We use the information we collect for the following purposes:',
            usagePurpose1: 'To provide and maintain our website and services',
            usagePurpose2: 'To improve our website and services',
            usagePurpose3: 'To respond to your inquiries and provide customer support',
            usagePurpose4: 'To send you updates and marketing communications (if you opt-in)',
            usagePurpose5: 'To analyze usage patterns and trends',
            cookies: 'Cookies and Tracking Technologies',
            cookiesDesc: 'Tools Code uses cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files that are stored on your device when you visit a website.',
            cookiesTypes: 'We use the following types of cookies:',
            essentialCookies: 'Essential Cookies',
            essentialCookiesDesc: 'These cookies are necessary for the website to function properly.',
            analyticsCookies: 'Analytics Cookies',
            analyticsCookiesDesc: 'These cookies help us understand how visitors interact with our website.',
            advertisingCookies: 'Advertising Cookies',
            advertisingCookiesDesc: 'These cookies are used to deliver relevant advertisements to you.',
            cookiesNote: 'We use Google Analytics to analyze website traffic and Google AdSense to display advertisements. These services may use cookies and other tracking technologies.',
            thirdParty: 'Third-Party Services',
            thirdPartyDesc: 'We may share your information with third-party service providers who help us operate our website and provide our services. These third parties are obligated to protect your information and may not use it for any other purpose.',
            thirdPartyNote: 'Our website includes links to third-party websites. This Privacy Policy does not apply to those third-party websites. We encourage you to review the privacy policies of any third-party websites you visit.',
            dataSecurity: 'Data Security',
            dataSecurityDesc: 'We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.',
            userRights: 'User Rights',
            userRightsDesc: 'You may have the right to access, correct, or delete your personal information. If you would like to exercise these rights, please contact us using the information provided below.',
            changes: 'Changes to This Privacy Policy',
            changesDesc: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.',
            contactUs: 'Contact Us',
            contactUsDesc: 'If you have any questions about this Privacy Policy, please contact us at:',
            email: 'Email: d1282397059@gamil.com'
        },
        
        // Terms of Service
        termsOfService: {
            title: 'Terms of Service',
            subtitle: 'Terms and conditions for using Tools Code',
            introduction: 'Introduction',
            intro: 'Welcome to Tools Code. By accessing or using our website, tools, or resources, you agree to comply with and be bound by these Terms of Service.',
            intro2: 'If you do not agree to these Terms of Service, please do not use Tools Code.',
            useOfServices: 'Use of Our Services',
            useOfServicesDesc: 'You may use Tools Code for personal, educational, or commercial purposes, provided that you comply with these Terms of Service and applicable laws.',
            useOfServicesNote: 'You agree not to:',
            prohibited1: 'Use our services for any illegal or unauthorized purpose',
            prohibited2: 'Violate any laws in your jurisdiction',
            prohibited3: 'Infringe on the intellectual property rights of others',
            prohibited4: 'Attempt to interfere with the proper functioning of our website',
            prohibited5: 'Upload or transmit malicious code or content',
            prohibited6: 'Attempt to gain unauthorized access to our systems or user accounts',
            intellectualProperty: 'Intellectual Property',
            intellectualPropertyDesc: 'All content, tools, and resources on Tools Code are the property of Tools Code or its licensors and are protected by intellectual property laws.',
            intellectualPropertyNote: 'You may not:',
            ipProhibited1: 'Copy, reproduce, distribute, or modify any content without explicit permission',
            ipProhibited2: 'Create derivative works based on our content or tools',
            ipProhibited3: 'Use our trademarks, logos, or branding without permission',
            ipNote: 'You may use the tools on our website to process your own content, and you retain ownership of that content. However, we may collect anonymous usage data to improve our services.',
            limitationOfLiability: 'Limitation of Liability',
            limitationOfLiabilityDesc: 'Tools Code provides its services on an "as-is" and "as-available" basis. We make no warranties or representations about the accuracy, reliability, or completeness of our services.',
            limitationOfLiabilityNote: 'To the fullest extent permitted by law, Tools Code shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our services.',
            limitationOfLiabilityNote2: 'We do not guarantee that our website will be uninterrupted or error-free, and we are not responsible for any damage to your computer or device resulting from your use of our services.',
            indemnification: 'Indemnification',
            indemnificationDesc: 'You agree to indemnify, defend, and hold harmless Tools Code, its affiliates, and its employees from any claims, damages, losses, or expenses arising from your use of our services or your violation of these Terms of Service.',
            changes: 'Changes to These Terms',
            changesDesc: 'Tools Code may update these Terms of Service from time to time. We will notify you of any significant changes by posting the new Terms of Service on our website.',
            changesNote: 'Your continued use of Tools Code after any changes to these Terms of Service constitutes your acceptance of the new terms.',
            termination: 'Termination',
            terminationDesc: 'Tools Code reserves the right to terminate or suspend your access to our services at any time, without notice, for any reason, including but not limited to a violation of these Terms of Service.',
            terminationNote: 'Upon termination, you must cease all use of our services.',
            governingLaw: 'Governing Law',
            governingLawDesc: 'These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Tools Code operates, without regard to its conflict of law provisions.',
            contactUs: 'Contact Us',
            contactUsDesc: 'If you have any questions about these Terms of Service, please contact us at:',
            email: 'Email: d1282397059@gamil.com'
        }
    },
    zh: {
        // Common
        navHome: '首页',
        navTools: '工具',
        navResources: '资源',
        navAbout: '关于我们',
        navContact: '联系我们',
        
        // New navigation keys
        nav: {
            home: '首页',
            tools: '工具',
            resources: '资源',
            about: '关于我们',
            contact: '联系我们'
        },
        
        // Home page
        heroTitle: '必备开发者工具和资源',
        heroSubtitle: '为开发者提供的实用工具和资源集合',
        sectionTools: '工具',
        sectionResources: '资源',
        sectionAbout: '关于我们',
        
        // Homepage tool descriptions
        tools: {
            m3u8Player: 'M3u8播放器',
            m3u8Desc: '在浏览器中轻松播放M3u8流',
            jsonValidator: 'JSON验证器',
            jsonDesc: '轻松验证和美化您的JSON数据',
            colorPicker: '颜色选择器',
            colorDesc: '为您的项目找到完美的配色方案',
            regexTester: '正则表达式测试器',
            regexDesc: '实时测试和调试您的正则表达式',
            base64: 'Base64编码器/解码器',
            base64Desc: '快速编码和解码Base64字符串',
            timestamp: '时间戳转换器',
            timestampDesc: '将时间戳转换为人类可读的日期，反之亦然'
        },
        
        // Homepage resource descriptions
        resources: {
            codeSnippets: '代码片段',
            codeSnippetsDesc: '各种编程语言的有用代码片段集合',
            apiDocs: 'API文档',
            apiDocsDesc: '官方API文档链接集合，供开发者快速查找各种技术的文档',
            tutorials: '教程和指南',
            tutorialsDesc: '各种开发主题的分步教程和指南',
            libraries: '有用的库',
            librariesDesc: '为开发者精心策划的有用库和框架列表'
        },
        
        // M3U8 Player
        m3u8Title: 'M3U8播放器',
        m3u8Subtitle: '直接在浏览器中流式播放M3U8视频播放列表',
        m3u8SectionTitle: '流式播放M3U8播放列表',
        m3u8SectionDesc: '在下方输入M3U8播放列表URL，开始在浏览器中流式播放视频内容。',
        m3u8UrlLabel: 'M3U8播放列表URL',
        m3u8UrlPlaceholder: 'https://example.com/playlist.m3u8',
        m3u8LoadBtn: '加载播放列表',
        m3u8StopBtn: '停止播放',
        m3u8PlayerTitle: '视频播放器',
        m3u8StatusTitle: '播放器状态',
        m3u8StatusReady: '就绪',
        m3u8StatusLoading: '正在加载播放列表...',
        m3u8StatusPlaying: '正在播放',
        m3u8StatusError: '加载播放列表出错',
        m3u8StatusNoUrl: '请输入有效的M3U8 URL',
        
        // Color Picker
        colorPicker: {
            title: '颜色选择器',
            description: '为您的项目找到完美的配色方案',
            pickColors: '选择颜色',
            instructions: '使用颜色选择器选择颜色或直接输入颜色代码。您还可以生成配色方案并保存您喜欢的颜色。',
            colorPreview: '颜色预览',
            colorPicker: '颜色选择器',
            schemeGenerator: '配色方案生成器',
            schemeDescription: '根据您选择的颜色生成配色方案。',
            colorHistory: '颜色历史记录',
            copy: '复制'
        },
        
        // Contact
        contact: {
            title: '联系我们',
            description: '如有任何问题或反馈，请与我们联系',
            sendMessage: '给我们发消息',
            name: '姓名',
            email: '邮箱',
            subject: '主题',
            message: '消息',
            sendMessageBtn: '发送消息',
            contactInfo: '联系信息'
        },
        
        // About
        about: {
            title: '关于我们',
            description: '了解更多关于Tools Code和我们的使命',
            mission: '我们的使命',
            missionDesc1: 'Tools Code致力于为开发者提供高质量的工具和资源，以简化他们的工作流程并提高生产力。我们的使命是创建一个全面的平台，满足各个技能水平开发者的需求。',
            missionDesc2: '我们相信，正确的工具可以在开发过程中产生重大影响，让开发者能够专注于他们最擅长的事情：创建出色的软件。',
            values: '我们的价值观',
            valueQuality: '质量：我们努力提供最高质量的工具和资源',
            valueAccessibility: '可访问性：我们让所有技能水平的开发者都能使用我们的工具',
            valueInnovation: '创新：我们不断改进并为我们的工具添加新功能',
            valueCommunity: '社区：我们重视开发者社区的反馈和贡献'
        },
        
        // Home
        home: {
            heroTitle: '欢迎来到Tools Code',
            heroSubtitle: '为开发者提供的必备工具和资源集合',
            exploreTools: '探索工具',
            browseResources: '浏览资源',
            sectionTools: '必备开发者工具',
            sectionResources: '开发者资源',
            sectionAbout: '关于Tools Code',
            aboutDesc1: 'Tools Code致力于为开发者提供高质量的工具和资源，以简化他们的工作流程并提高生产力。我们的使命是创建一个全面的平台，满足各个技能水平开发者的需求。',
            aboutDesc2: '无论您是初学者想要学习基础知识，还是经验丰富的开发者寻求高级工具，Tools Code都能满足您的需求。'
        },
        
        // Footer
        footer: {
            title: 'Tools Code',
            description: '为开发者提供的必备工具和资源。',
            tools: '工具',
            resources: '资源',
            company: '公司',
            copyright: '© 2026 Tools Code. 保留所有权利。',
            m3u8Player: 'M3U8播放器',
            jsonValidator: 'JSON验证器',
            colorPicker: '颜色选择器',
            regexTester: '正则表达式测试器',
            timestampConverter: '时间戳转换器',
            base64EncoderDecoder: 'Base64编码器/解码器',
            codeSnippets: '代码片段',
            apiDocumentation: 'API文档',
            tutorialsGuides: '教程和指南',
            usefulLibraries: '有用的库',
            aboutUs: '关于我们',
            contact: '联系我们',
            privacyPolicy: '隐私政策',
            termsOfService: '服务条款'
        },
        
        // Language toggle
        langEnglish: 'English',
        langChinese: '中文',
        
        // Button and link text
        buttons: {
            tryNow: '立即尝试 →',
            browseSnippets: '浏览代码片段 →',
            viewDocumentation: '查看文档 →',
            exploreTutorials: '探索教程 →',
            viewLibraries: '查看库 →'
        },
        
        // JSON Validator
        jsonValidator: {
            title: 'JSON验证器',
            subtitle: '轻松验证、美化和操作您的JSON数据',
            sectionTitle: '验证JSON',
            description: '在下方输入您的JSON数据，点击"验证"检查是否有效。您还可以美化、压缩或转义JSON。',
            inputLabel: 'JSON输入',
            validateBtn: '验证',
            beautifyBtn: '美化',
            compressBtn: '压缩',
            unescapeBtn: '转义',
            copyResultBtn: '复制结果',
            resultLabel: '结果',
            errorEnterData: '请输入JSON数据',
            errorInvalidJson: '错误',
            successValid: 'JSON有效！',
            successBeautified: 'JSON美化成功！',
            successCompressed: 'JSON压缩成功！',
            successUnescaped: 'JSON转义成功！',
            successCopied: '结果已复制到剪贴板！',
            errorNoResult: '没有结果可复制',
            errorCopyFailed: '复制结果失败'
        },
        
        // Regex Tester
        regexTester: {
            title: '正则表达式测试器',
            subtitle: '实时测试和调试您的正则表达式',
            sectionTitle: '测试正则表达式',
            description: '在下方输入正则表达式和测试字符串，实时查看匹配结果。您还可以选择各种正则标志来修改行为。',
            regexLabel: '正则表达式',
            regexPlaceholder: '输入正则表达式模式',
            flagsLabel: '标志',
            flagGlobal: '全局 (g) - 查找所有匹配',
            flagInsensitive: '不区分大小写 (i) - 忽略大小写',
            flagMultiline: '多行 (m) - ^ 和 $ 匹配行的开始/结束',
            flagDotall: '点匹配 (s) - . 匹配换行符',
            flagUnicode: 'Unicode (u) - 启用Unicode支持',
            flagSticky: '粘性 (y) - 从最后一个索引匹配',
            testString: '测试字符串',
            testStringPlaceholder: '输入要测试正则表达式的文本',
            testBtn: '测试正则表达式',
            results: '结果',
            resultsPlaceholder: '输入正则表达式模式和测试字符串，然后点击"测试正则表达式"查看结果。',
            commonPatterns: '常用正则表达式模式',
            email: '电子邮件',
            url: 'URL',
            phoneUs: '电话号码（美国）',
            date: '日期 (MM/DD/YYYY)',
            ipAddress: 'IP地址',
            password: '密码（强）',
            usePattern: '使用模式',
            examplesTitle: '常用正则表达式模式',
            exampleEmail: '电子邮件',
            exampleUrl: 'URL',
            examplePhone: '电话号码（美国）',
            exampleDate: '日期 (MM/DD/YYYY)',
            exampleIp: 'IP地址',
            examplePassword: '密码（强）',
            errorEnterPattern: '请输入正则表达式模式',
            noMatches: '未找到匹配',
            foundMatches: '找到 {{count}} 个匹配：',
            matchLabel: '匹配 {{num}}',
            indexLabel: '索引',
            groupsLabel: '组',
            highlightedLabel: '高亮匹配：',
            errorLabel: '错误'
        },
        
        // Base64 Encoder/Decoder
        base64: {
            title: 'Base64编码器/解码器',
            subtitle: '快速轻松地编码和解码Base64字符串',
            sectionTitle: '编码和解码Base64',
            description: '在下方输入要编码的文本或要解码的Base64字符串。',
            textToBase64: '文本转Base64',
            textLabel: '文本',
            textPlaceholder: '输入要编码的文本',
            encodeBtn: '编码',
            resultLabel: '结果',
            copyBtn: '复制',
            base64ToText: 'Base64转文本',
            base64Label: 'Base64',
            base64Placeholder: '输入要解码的Base64',
            decodeBtn: '解码',
            errorEnterText: '请输入要编码的文本',
            errorEnterBase64: '请输入要解码的Base64',
            errorEncoding: '编码文本时出错',
            errorDecoding: '解码Base64时出错'
        },
        
        // Timestamp Converter
        timestamp: {
            title: '时间戳转换器',
            subtitle: '将时间戳转换为人类可读的日期，反之亦然',
            sectionTitle: '转换时间戳',
            description: '在下方输入时间戳或日期，在Unix时间戳和人类可读的日期之间进行转换。',
            timestampToDate: '时间戳转日期',
            timestampLabel: '时间戳',
            timestampPlaceholder: '输入时间戳（例如 1609459200）',
            convertToDateBtn: '转换为日期',
            dateToTimestamp: '日期转时间戳',
            dateLabel: '日期',
            datePlaceholder: '选择日期',
            convertToTimestampBtn: '转换为时间戳',
            resultLabel: '结果',
            copyBtn: '复制',
            currentTimestamp: '当前时间戳',
            currentTimestampLabel: '当前Unix时间戳',
            errorEnterTimestamp: '请输入时间戳',
            errorInvalidTimestamp: '无效的时间戳',
            errorSelectDate: '请选择日期',
            errorInvalidDate: '无效的日期'
        },
        
        // Code Snippets
        codeSnippets: {
            title: '代码片段',
            subtitle: '各种编程语言的有用代码片段集合',
            html: 'HTML',
            css: 'CSS',
            javascript: 'JavaScript',
            python: 'Python',
            responsiveNavbar: '响应式导航栏',
            responsiveNavbarDesc: '带有移动菜单切换的响应式导航栏',
            cardComponent: '卡片组件',
            cardComponentDesc: '带有图像和内容的响应式卡片组件',
            flexboxCenter: 'Flexbox居中',
            flexboxCenterDesc: '使用flexbox水平和垂直居中元素',
            responsiveGrid: '响应式网格',
            responsiveGridDesc: '使用CSS Grid的响应式网格布局',
            fetchApi: 'Fetch API',
            fetchApiDesc: '使用Fetch API进行HTTP请求',
            debounceFunction: '防抖函数',
            debounceFunctionDesc: '限制函数触发频率的防抖函数',
            flaskApp: 'Flask应用',
            flaskAppDesc: '一个简单的Flask Web应用程序',
            readJsonFile: '读取JSON文件',
            readJsonFileDesc: '在Python中读取和解析JSON文件',
            aboutPage: '关于此页面',
            aboutPageDesc1: '此页面收集了各种编程语言的有用代码片段，使开发人员能够快速找到并使用常见任务的代码片段。',
            aboutPageDesc2: '所有代码片段都经过测试，可以在您的项目中使用。'
        },
        
        // API Documentation
        apiDocs: {
            title: 'API文档列表',
            subtitle: '官方API文档链接集合，帮助开发人员快速查找各种技术的文档',
            frontendTech: '前端技术',
            backendTech: '后端技术',
            databases: '数据库',
            devTools: '开发工具',
            htmlDesc: '超文本标记语言官方文档',
            cssDesc: '层叠样式表官方文档',
            javascriptDesc: 'JavaScript官方文档',
            reactDesc: 'React官方文档',
            vueDesc: 'Vue.js官方文档',
            angularDesc: 'Angular官方文档',
            nodejsDesc: 'Node.js官方文档',
            expressDesc: 'Express.js官方文档',
            pythonDesc: 'Python官方文档',
            djangoDesc: 'Django官方文档',
            flaskDesc: 'Flask官方文档',
            phpDesc: 'PHP官方文档',
            laravelDesc: 'Laravel官方文档',
            javaDesc: 'Java官方文档',
            springDesc: 'Spring Framework官方文档',
            mysqlDesc: 'MySQL官方文档',
            postgresqlDesc: 'PostgreSQL官方文档',
            mongodbDesc: 'MongoDB官方文档',
            redisDesc: 'Redis官方文档',
            gitDesc: 'Git官方文档',
            dockerDesc: 'Docker官方文档',
            kubernetesDesc: 'Kubernetes官方文档',
            viewDocs: '查看文档 →'
        },
        
        // Libraries page
        libraries: {
            title: '实用库',
            subtitle: '为开发者精心挑选的实用库和框架列表',
            frontend: '前端库',
            backend: '后端库',
            database: '数据库库',
            devops: '开发运维与工具',
            reactLibraries: 'React库',
            vueLibraries: 'Vue库',
            generalFrontend: '通用前端',
            nodeLibraries: 'Node.js库',
            pythonLibraries: 'Python库',
            javaLibraries: 'Java库',
            sqlLibraries: 'SQL库',
            nosqlLibraries: 'NoSQL库',
            devopsLibraries: '开发运维库',
            testingLibraries: '测试库',
            aboutTitle: '关于此页面',
            aboutDesc1: '此页面提供了不同技术和领域的实用库和框架的精选列表。',
            aboutDesc2: '所有链接都指向官方库网站或文档，确保开发人员能够访问最新信息。'
        },
        
        // Useful Libraries
        usefulLibraries: {
            title: '有用的库',
            subtitle: '为开发人员精心策划的有用库和框架列表',
            frontendLibs: '前端库',
            backendLibs: '后端库',
            utilsLibs: '工具库',
            testingLibs: '测试库',
            lodashDesc: '现代化的JavaScript实用程序库，提供模块化、性能和额外功能',
            momentDesc: '解析、验证、操作和显示JavaScript中的日期',
            axiosDesc: '基于Promise的HTTP客户端，适用于浏览器和node.js',
            reactQueryDesc: '用于在React中获取、缓存和更新异步数据的Hooks',
            expressDesc: '快速、无偏见、极简的Node.js Web框架',
            nestjsDesc: '用于构建高效、可扩展应用程序的渐进式Node.js框架',
            fastifyDesc: '快速且低开销的Web框架，适用于Node.js',
            typeormDesc: 'TypeScript和JavaScript的ORM（ES7、ES6、ES5）',
            jestDesc: '专注于简单性的令人愉快的JavaScript测试框架',
            mochaDesc: '简单、灵活、有趣的Node.js和浏览器JavaScript测试框架',
            cypressDesc: '快速、简单、可靠的浏览器运行测试',
            puppeteerDesc: '无头Chrome Node API',
            viewDocs: '查看文档 →',
            viewRepo: '查看仓库 →'
        },
        
        // Articles
        articles: {
            title: '文章',
            subtitle: '各种开发主题的分步教程和指南',
            heroTitle: '文章和教程',
            heroSubtitle: '探索我们为开发者准备的教程、指南和文章集合',
            latestArticles: '最新文章',
            readMore: '阅读更多 →',
            noArticles: '目前没有可用的文章。',
            hls: {
                title: 'HLS协议原理与实现细节',
                category: '视频技术',
                content: {
                    section1: {
                        title: '一、HLS协议架构总览',
                        subsections: {
                            s11: {
                                title: '1.1 系统架构分层',
                                content: 'HLS（HTTP Live Streaming）协议采用分层解耦的设计理念，整个系统可分为三个核心层级：',
                                layers: {
                                    client: '客户端层 (Player Layer)\nAVPlayer / ExoPlayer / hls.js / Shaka Player',
                                    delivery: '分发层 (Delivery Layer)\nCDN Edge → Origin Shield → Packager',
                                    origin: '源站层 (Origin Layer)\nEncoder → Segmenter → DRM Encryptor → Storage (TS/fMP4)'
                                },
                                coreConcepts: '核心设计理念：',
                                concepts: [
                                    'HTTP 传输：复用现有 Web 基础设施，无需专用流媒体服务器',
                                    '分段传输：将连续流切分为独立可缓存的片段',
                                    '自适应码率（ABR）：客户端智能选择最优质量，实现网络自适应'
                                ]
                            },
                            s12: {
                                title: '1.2 数据流全景',
                                content: '数据流向：\n原始视频输入 → 编码器(多码率) → 切片器(Segmenter) → 加密(可选) → 存储\n播放器 ← CDN ← HTTP GET ← M3U8索引文件 + TS/fMP4片段\n解码渲染 → 缓冲区管理 → ABR决策引擎 → 网络请求调度'
                            }
                        }
                    },
                    section2: {
                        title: '二、核心组件实现原理',
                        subsections: {
                            s21: {
                                title: '2.1 切片器（Segmenter）工作机制',
                                content: '切片器是 HLS 系统的核心生产组件，负责将连续编码流转换为离散片段。',
                                inputProcessing: {
                                    title: '输入处理流程',
                                    content: '1. 数据获取与同步',
                                    sources: [
                                        'RTMP 推流 (直播场景)',
                                        'MPEG-TS over UDP (广电信号)',
                                        'MP4/MOV 文件 (点播场景)',
                                        'SDI/HDMI 采集卡 (专业制作)'
                                    ],
                                    keyPoints: '关键技术点：',
                                    points: [
                                        '时间戳同步：解析 PCR (Program Clock Reference) 或 PTS/DTS，确保音视频同步',
                                        'GOP 对齐：检测 I-Frame 边界，确保片段可从任意点开始解码',
                                        '缓冲管理：维护 3-5 秒滑动窗口，平滑网络抖动与编码波动'
                                    ]
                                },
                                slicingLogic: {
                                    title: '切片触发逻辑',
                                    code: '# 伪代码：基于 GOP 的切片决策\ndef segment_trigger_policy():\n    if current_time - last_cut_time >= target_duration:\n        if current_frame.is_keyframe:  # 必须在关键帧处切割\n            execute_cut()\n            update_manifest()\n            reset_timer()\n        else:\n            wait_for_next_keyframe()  # 避免非关键帧切割导致解码错误'
                                },
                                outputFormats: {
                                    title: '输出封装格式演进',
                                    table: {
                                        headers: ['格式', '文件扩展名', '适用场景', '特点'],
                                        rows: [
                                            ['MPEG-TS', '.ts', '传统 HLS', '容错性强，支持任意位置解码，但开销较大（~10%）'],
                                            ['fMP4', '.m4s', '现代 HLS/CMAF', '与 DASH 共享存储，开销低（~1%），支持独立片段'],
                                            ['CMAF', '.cmfv/.cmfa', '统一标准', 'HLS/DASH 双协议复用，减少 50% 存储成本']
                                        ]
                                    }
                                },
                                ffmpegExample: {
                                    title: 'FFmpeg 切片实现示例',
                                    code: '# 传统 TS 切片（直播）\nffmpeg -i input.mp4 -c:v libx264 -c:a aac \\\n  -f hls -hls_time 6 -hls_list_size 10 \\\n  -hls_flags delete_segments+program_date_time \\\n  -hls_segment_filename "live_%03d.ts" \\\n  playlist.m3u8\n\n# 现代 fMP4 切片（VOD）\nffmpeg -i input.mp4 -c:v libx264 -c:a aac \\\n  -f hls -hls_time 6 -hls_playlist_type vod \\\n  -hls_segment_type fmp4 \\\n  -hls_segment_filename "segment_%d.m4s" \\\n  -hls_flags independent_segments \\\n  master.m3u8'
                                }
                            },
                            s22: {
                                title: '2.2 打包器（Packager）工作流程',
                                content: '打包器负责将编码后的多码率流组装为标准的 HLS 清单与片段。',
                                twoStageWorkflow: {
                                    title: '两阶段工作流（现代推荐模式）：',
                                    stage1: '阶段一：编码 → 多码率 MP4（Mezzanine 文件）\n- 一次性高成本转码\n- 作为所有 ABR 格式的母版文件',
                                    stage2: '阶段二：转封装 → HLS/DASH 分发格式\n- 低成本、快速的格式转换\n- 支持动态打包（Just-In-Time Packaging）'
                                },
                                keyParameters: {
                                    title: '关键配置参数：',
                                    params: [
                                        'hls_time：目标片段时长（直播通常 2-6 秒，LL-HLS 0.5-2 秒）',
                                        'hls_list_size：播放列表保留片段数（直播滑动窗口大小）',
                                        'hls_playlist_type：VOD（点播）或省略（直播）',
                                        'var_stream_map：音视频流组合映射，支持多音轨复用'
                                    ]
                                }
                            }
                        }
                    },
                    section3: {
                        title: '三、自适应码率（ABR）算法深度解析',
                        subsections: {
                            s31: {
                                title: '3.1 ABR 决策架构',
                                content: 'ABR 是 HLS 的智能大脑，通过实时监测网络状态动态调整视频质量：',
                                architecture: 'ABR Controller\n\n吞吐量估计器 (Throughput) ← 下载速度测量 (EWMA滤波)\n缓冲区管理器 (Buffer) ← 当前缓冲时长/容量 (目标：30-45秒)\n决策引擎 (Policy) ← 码率选择算法 (BOLA/Throughput)\n\n↓\n码率决策输出'
                            },
                            s32: {
                                title: '3.2 主流 ABR 算法分类',
                                algorithms: {
                                    throughputBased: {
                                        title: '1. 基于吞吐量（Throughput-Based）',
                                        code: '# 原理：根据近期片段下载速度选择码率\niestimated_bandwidth = α * current_speed + (1-α) * historical_avg\nselected_bitrate = max { r ∈ R | r < estimated_bandwidth * safety_margin }\n\n# 特点\n- 响应快速，适合网络剧烈波动场景\n- 缺点：容易过度反应，产生频繁切换',
                                        content: '原理：根据近期片段下载速度选择码率'
                                    },
                                    bufferBased: {
                                        title: '2. 基于缓冲区（Buffer-Based）',
                                        code: '# 原理：根据缓冲区饱和度决策\nif buffer_level < buffer_min:\n    selected_bitrate = lowest_quality  # 紧急降级\nelif buffer_level > buffer_max:\n    selected_bitrate = highest_quality # 安全升级\nelse:\n    selected_bitrate = f(buffer_level) # 平滑过渡\n\n# 代表算法：BOLA (Buffer Occupancy based Lyapunov Algorithm)\n# 特点：稳定性强，避免 rebuffer，但可能无法充分利用带宽',
                                        content: '原理：根据缓冲区饱和度决策'
                                    },
                                    hybrid: {
                                        title: '3. 混合算法（Hybrid）',
                                        code: '# 现代播放器主流方案（如 hls.js、Shaka Player）\ndecision_weight = w1 * throughput_score + w2 * buffer_score + w3 * QoE_score\n\n# QoE 考量因素：\n- 质量切换频率（避免"乒乓效应"）\n- 启动延迟（首包时间）\n- 卡顿次数与时长',
                                        content: '现代播放器主流方案（如 hls.js、Shaka Player）'
                                    }
                                }
                            },
                            s33: {
                                title: '3.3 LL-HLS 低延迟场景优化',
                                content: '低延迟 HLS（LL-HLS）对 ABR 算法提出更高要求：',
                                challenges: '挑战：\n缓冲区极小（通常 3 秒以内），传统算法的反应时间不足\n片段切分更细（Partial Segment 0.2-0.5 秒），测量噪声增大',
                                optimization: {
                                    title: '优化策略：',
                                    code: '# 服务器端提供预加载提示\n#EXT-X-PRELOAD-HINT:TYPE=PART,URI="next_partial.m4s"\n\n# 客户端算法调整\n- 预测下一个独立帧（GOP 边界）到达时间\n- 基于 PART-HOLD-BACK 计算安全播放延迟\n- 快速降级：当 buffer < 1 秒时立即切换至最低码率'
                                }
                            }
                        }
                    },
                    section4: {
                        title: '四、播放器实现细节',
                        subsections: {
                            s41: {
                                title: '4.1 播放引擎架构',
                                content: '以开源 hls.js 为例，解析现代 HLS 播放器的内部实现：',
                                architecture: 'Application (UI Controls / Events)\n↓\nhls.js Core\n- Loader (HTTP/XHR) → Demuxer (TS/fMP4) → AbrController (码率决策)\n- Playlist Loader (M3U8解析) → Remuxer (to MP4) → StreamController (缓冲/调度)\n↓\nBrowser MSE (Media Source Extensions API)\n↓\nVideo/Audio Decoder (Hardware Acceleration / Software)'
                            },
                            s42: {
                                title: '4.2 关键实现机制',
                                mechanisms: {
                                    dualBuffer: {
                                        title: '1. 双缓冲区架构',
                                        code: '// 逻辑缓冲区 vs 解码缓冲区分离\nclass StreamBuffer {\n    constructor() {\n        this.appended = 0;    // 已追加到 MSE 的数据\n        this.buffered = 0;    // 浏览器实际解码缓冲\n        this.maxBufLen = 30;  // 目标缓冲时长（秒）\n    }\n    \n    // 动态调整策略\n    updateTargetDuration(networkSpeed) {\n        if (networkSpeed < 1.5 * currentBitrate) {\n            this.maxBufLen = Math.min(this.maxBufLen + 5, 60); // 保守策略\n        } else {\n            this.maxBufLen = Math.max(this.maxBufLen - 2, 15); // 激进策略\n        }\n    }\n}'
                                    },
                                    seamlessSwitching: {
                                        title: '2. 无缝切换（Seamless Switching）',
                                        content: '关键帧对齐：所有码率使用相同 GOP 结构（如 2 秒 GOP）\nPTS/DTS 连续性：切换时保持时间戳单调递增，避免解码器重置\n缓冲重叠：新码率片段下载完成后，在关键帧边界处切换，丢弃旧缓冲'
                                    },
                                    liveCatchup: {
                                        title: '3. 直播追赶机制',
                                        code: '// 当客户端延迟过大时的追帧逻辑\nif (currentLatency > maxLatencyThreshold) {\n    // 方法1：加速播放（1.1-1.5倍速）\n    video.playbackRate = 1.2;\n    \n    // 方法2：跳过片段（直接请求最新 SEQUENCE）\n    const liveEdgeSequence = getLatestSequence();\n    skipTo(liveEdgeSequence - 3); // 保留 3 个片段缓冲\n    \n    // 方法3：服务器端提示（EXT-X-SKIP）\n    requestPlaylistWithSkipHint();\n}'
                                    }
                                }
                            },
                            s43: {
                                title: '4.3 DRM 解密流程',
                                content: 'HLS 支持多种内容保护方案，播放器需集成 CDM（Content Decryption Module）：',
                                decryptionFlow: {
                                    title: '解密流程：',
                                    steps: [
                                        '加密内容 (AES-128/SAMPLE-AES)',
                                        '获取密钥 (EXT-X-KEY URI)',
                                        '密钥请求（带认证 Token）',
                                        '密钥响应 (16 bytes Key + IV)',
                                        '提取样本数据 (NAL units)',
                                        'AES-128-CBC/CTR 解密',
                                        '送入解码器'
                                    ]
                                },
                                fairplay: {
                                    title: 'FairPlay 特殊处理（Apple 生态）：',
                                    points: [
                                        '使用 SAMPLE-AES 加密',
                                        '通过 skd:// 密钥 URI 触发 FairPlay CDM',
                                        '支持 SPC（Server Playback Context）与 CKC（Content Key Context）交换'
                                    ]
                                }
                            }
                        }
                    },
                    section5: {
                        title: '五、服务端实现架构',
                        subsections: {
                            s51: {
                                title: '5.1 直播生产链路',
                                content: '信号源 (RTMP/SRT) → 编码器 (CPU/GPU) → 切片器 (FFmpeg/Elemental) → 存储/CDN (Origin/Edge)',
                                llhlsConfig: {
                                    title: '关键参数配置（LL-HLS 场景）：',
                                    code: 'segment_duration: 2s          # 标准片段时长\npartial_segment_duration: 0.5s # 部分片段时长（LL-HLS）\nplaylist_depth: 6-8           # 播放列表保留片段数\npart_hold_back: 3.0s          # 建议播放延迟\ndelta_updates: enabled        # 增量更新减少带宽'
                                }
                            },
                            s52: {
                                title: '5.2 动态打包（Just-In-Time Packaging）',
                                content: '现代架构倾向于存储单一格式（CMAF），实时转封装为 HLS/DASH：',
                                advantages: '优势：\n存储成本降低 50%（无需存储 TS 和 fMP4 双份）\n支持多协议即时适配\n统一 DRM 加密处理',
                                architecture: '存储层 (CMAF fMP4)\n↓\nPackager Edge\n- HLS Packager (.m3u8) | DASH Packager (.mpd)\n↓\n客户端'
                            }
                        }
                    },
                    section6: {
                        title: '六、M3U8 协议核心标签',
                        subsections: {
                            s61: {
                                title: '6.1 主播放列表（Master Playlist）',
                                code: '#EXTM3U\n#EXT-X-VERSION:6\n#EXT-X-INDEPENDENT-SEGMENTS\n\n#EXT-X-STREAM-INF:BANDWIDTH=800000,RESOLUTION=640x360,CODECS="avc1.64001E,mp4a.40.2"\n360p.m3u8\n\n#EXT-X-STREAM-INF:BANDWIDTH=1400000,RESOLUTION=1280x720,CODECS="avc1.64001F,mp4a.40.2"\n720p.m3u8\n\n#EXT-X-STREAM-INF:BANDWIDTH=2800000,RESOLUTION=1920x1080,CODECS="avc1.640028,mp4a.40.2"\n1080p.m3u8'
                            },
                            s62: {
                                title: '6.2 媒体播放列表（Media Playlist）',
                                code: '#EXTM3U\n#EXT-X-VERSION:6\n#EXT-X-TARGETDURATION:10\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-PLAYLIST-TYPE:VOD      # VOD=点播，省略=直播\n#EXT-X-INDEPENDENT-SEGMENTS\n#EXT-X-ENDLIST                # 点播结束标记（直播无此标签）\n\n#EXTINF:9.976,                # 片段时长（秒）\nsegment_000.ts\n#EXTINF:10.012,\nsegment_001.ts'
                            },
                            s63: {
                                title: '6.3 LL-HLS 专用标签',
                                code: '#EXT-X-SERVER-CONTROL:CAN-BLOCK-RELOAD=YES,PART-HOLD-BACK=3.0\n#EXT-X-PART-INF:PART-TARGET=0.5\n#EXT-X-PART:DURATION=0.5,URI="segment0045_part3.m4s"\n#EXT-X-PRELOAD-HINT:TYPE=PART,URI="segment0045_part4.m4s"'
                            }
                        }
                    }
                }
            }
        },
        
        // Privacy Policy
        privacyPolicy: {
            title: '隐私政策',
            subtitle: '我们如何收集、使用和保护您的信息',
            intro: 'Tools Code致力于保护您的隐私。本隐私政策解释了当您访问我们的网站、使用我们的工具或访问我们的资源时，我们如何收集、使用、披露和保护您的信息。',
            intro2: '通过使用Tools Code，您同意本隐私政策中描述的做法。',
            informationCollection: '我们收集的信息',
            informationCollectionDesc: '我们可能收集以下类型的信息：',
            personalInfo: '个人信息',
            personalInfoDesc: '当您联系我们时，我们可能会收集您的姓名、电子邮件地址以及您提供的任何其他信息。',
            usageData: '使用数据',
            usageDataDesc: '我们收集有关您如何使用我们网站的信息，包括访问的页面、在页面上花费的时间以及其他浏览活动。',
            deviceInfo: '设备信息',
            deviceInfoDesc: '我们可能会收集有关您设备的信息，包括您的IP地址、浏览器类型、操作系统和设备标识符。',
            informationUsage: '我们如何使用您的信息',
            informationUsageDesc: '我们将收集的信息用于以下目的：',
            usagePurpose1: '提供和维护我们的网站和服务',
            usagePurpose2: '改进我们的网站和服务',
            usagePurpose3: '回应您的询问并提供客户支持',
            usagePurpose4: '向您发送更新和营销通讯（如果您选择加入）',
            usagePurpose5: '分析使用模式和趋势',
            cookies: 'Cookie和跟踪技术',
            cookiesDesc: 'Tools Code使用Cookie和类似的跟踪技术来增强您在我们网站上的体验。Cookie是当您访问网站时存储在您设备上的小数据文件。',
            cookiesTypes: '我们使用以下类型的Cookie：',
            essentialCookies: '必要Cookie',
            essentialCookiesDesc: '这些Cookie对于网站正常运行是必需的。',
            analyticsCookies: '分析Cookie',
            analyticsCookiesDesc: '这些Cookie帮助我们了解访问者如何与我们的网站互动。',
            advertisingCookies: '广告Cookie',
            advertisingCookiesDesc: '这些Cookie用于向您提供相关广告。',
            cookiesNote: '我们使用Google Analytics分析网站流量，并使用Google AdSense显示广告。这些服务可能会使用Cookie和其他跟踪技术。',
            thirdParty: '第三方服务',
            thirdPartyDesc: '我们可能会与帮助我们运营网站和提供服务的第三方服务提供商共享您的信息。这些第三方有义务保护您的信息，不得将其用于任何其他目的。',
            thirdPartyNote: '我们的网站包含指向第三方网站的链接。本隐私政策不适用于这些第三方网站。我们鼓励您查看您访问的任何第三方网站的隐私政策。',
            dataSecurity: '数据安全',
            dataSecurityDesc: '我们采取合理措施保护您的信息免受未经授权的访问、使用或披露。但是，没有一种通过互联网传输或电子存储的方法是完全安全的，因此我们不能保证绝对安全。',
            userRights: '用户权利',
            userRightsDesc: '您可能有权访问、更正或删除您的个人信息。如果您想行使这些权利，请使用下面提供的信息联系我们。',
            changes: '本隐私政策的变更',
            changesDesc: '我们可能会不时更新本隐私政策。我们将通过在我们的网站上发布新的隐私政策来通知您任何更改。建议您定期查看本隐私政策以了解任何更改。',
            contactUs: '联系我们',
            contactUsDesc: '如果您对本隐私政策有任何疑问，请通过以下方式联系我们：',
            email: '邮箱：d1282397059@gamil.com'
        },
        
        // Terms of Service
        termsOfService: {
            title: '服务条款',
            subtitle: '使用Tools Code的条款和条件',
            introduction: '介绍',
            intro: '欢迎使用Tools Code。通过访问或使用我们的网站、工具或资源，您同意遵守并受这些服务条款的约束。',
            intro2: '如果您不同意这些服务条款，请不要使用Tools Code。',
            useOfServices: '我们的服务使用',
            useOfServicesDesc: '您可以将Tools Code用于个人、教育或商业目的，前提是您遵守这些服务条款和适用法律。',
            useOfServicesNote: '您同意不：',
            prohibited1: '将我们的服务用于任何非法或未经授权的目的',
            prohibited2: '违反您所在司法管辖区的法律',
            prohibited3: '侵犯他人的知识产权',
            prohibited4: '试图干扰我们网站的正常运行',
            prohibited5: '上传或传输恶意代码或内容',
            prohibited6: '试图未经授权访问我们的系统或用户账户',
            intellectualProperty: '知识产权',
            intellectualPropertyDesc: 'Tools Code上的所有内容、工具和资源均为Tools Code或其许可方的财产，受知识产权法保护。',
            intellectualPropertyNote: '您不得：',
            ipProhibited1: '未经明确许可复制、分发或修改任何内容',
            ipProhibited2: '基于我们的内容或工具创建衍生作品',
            ipProhibited3: '未经许可使用我们的商标、徽标或品牌',
            ipNote: '您可以使用我们网站上的工具处理您自己的内容，并且您保留该内容的所有权。但是，我们可能会收集匿名使用数据以改进我们的服务。',
            limitationOfLiability: '责任限制',
            limitationOfLiabilityDesc: 'Tools Code按"原样"和"可用"基础提供服务。我们不对我们服务的准确性、可靠性或完整性做出任何保证或声明。',
            limitationOfLiabilityNote: '在法律允许的最大范围内，Tools Code不对因您使用我们的服务而产生的任何直接、间接、附带、后果性或惩罚性损害承担责任。',
            limitationOfLiabilityNote2: '我们不保证我们的网站将不间断或无错误，对于因您使用我们的服务而对您的计算机或设备造成的任何损害，我们不承担责任。',
            indemnification: '赔偿',
            indemnificationDesc: '您同意赔偿、为Tools Code、其关联公司及其员工辩护，并使其免受因您使用我们的服务或违反这些服务条款而产生的任何索赔、损害、损失或费用的影响。',
            changes: '这些条款的变更',
            changesDesc: 'Tools Code可能会不时更新这些服务条款。我们将通过在我们的网站上发布新的服务条款来通知您任何重大更改。',
            changesNote: '在这些服务条款发生任何更改后，您继续使用Tools Code即构成您接受新条款。',
            termination: '终止',
            terminationDesc: 'Tools Code保留随时终止或暂停您访问我们服务的权利，无需通知，原因包括但不限于违反这些服务条款。',
            terminationNote: '终止后，您必须停止使用我们的所有服务。',
            governingLaw: '管辖法律',
            governingLawDesc: '这些服务条款应受Tools Code运营所在司法管辖区的法律管辖，并根据该法律进行解释，不考虑其法律冲突规定。',
            contactUs: '联系我们',
            contactUsDesc: '如果您对这些服务条款有任何疑问，请通过以下方式联系我们：',
            email: '邮箱：d1282397059@gamil.com'
        }
    }
};

// Current language
let currentLang = 'en';

// Default language is always English; timezone detection removed
function detectUserLanguage() {
    return 'en';
}

// Set language
function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        // Save language preference to localStorage
        localStorage.setItem('language', lang);
        // Update page content
        updatePageContent();
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        // Sync all language select dropdowns
        document.querySelectorAll('.lang-switcher-select').forEach(function(el) {
            el.value = lang;
        });
    }
}

// Get translation for a key (supports nested keys like 'nav.home')
function t(key) {
    const keys = key.split('.');
    let result = translations[currentLang];
    
    for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
            result = result[k];
        } else {
            return key;
        }
    }
    
    return result || key;
}

// Update page content with translations
function updatePageContent() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = t(key);
        
        // Special handling for placeholder attributes
        if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
            el.placeholder = translation;
        } else {
            el.textContent = translation;
        }
    });
    
    // Update navigation (backward compatibility)
    document.querySelectorAll('[data-i18n="navHome"]').forEach(el => el.textContent = t('navHome'));
    document.querySelectorAll('[data-i18n="navTools"]').forEach(el => el.textContent = t('navTools'));
    document.querySelectorAll('[data-i18n="navResources"]').forEach(el => el.textContent = t('navResources'));
    document.querySelectorAll('[data-i18n="navAbout"]').forEach(el => el.textContent = t('navAbout'));
    document.querySelectorAll('[data-i18n="navContact"]').forEach(el => el.textContent = t('navContact'));
    
    // Update M3U8 Player (backward compatibility)
    document.querySelectorAll('[data-i18n="m3u8Title"]').forEach(el => el.textContent = t('m3u8Title'));
    document.querySelectorAll('[data-i18n="m3u8Subtitle"]').forEach(el => el.textContent = t('m3u8Subtitle'));
    document.querySelectorAll('[data-i18n="m3u8SectionTitle"]').forEach(el => el.textContent = t('m3u8SectionTitle'));
    document.querySelectorAll('[data-i18n="m3u8SectionDesc"]').forEach(el => el.textContent = t('m3u8SectionDesc'));
    document.querySelectorAll('[data-i18n="m3u8UrlLabel"]').forEach(el => el.textContent = t('m3u8UrlLabel'));
    document.querySelectorAll('[data-i18n="m3u8UrlPlaceholder"]').forEach(el => el.placeholder = t('m3u8UrlPlaceholder'));
    document.querySelectorAll('[data-i18n="m3u8LoadBtn"]').forEach(el => el.textContent = t('m3u8LoadBtn'));
    document.querySelectorAll('[data-i18n="m3u8StopBtn"]').forEach(el => el.textContent = t('m3u8StopBtn'));
    document.querySelectorAll('[data-i18n="m3u8PlayerTitle"]').forEach(el => el.textContent = t('m3u8PlayerTitle'));
    document.querySelectorAll('[data-i18n="m3u8StatusTitle"]').forEach(el => el.textContent = t('m3u8StatusTitle'));
    
    // Update footer (backward compatibility)
    document.querySelectorAll('[data-i18n="footerTitle"]').forEach(el => el.textContent = t('footer.title'));
    document.querySelectorAll('[data-i18n="footerDesc"]').forEach(el => el.textContent = t('footer.description'));
    document.querySelectorAll('[data-i18n="footerTools"]').forEach(el => el.textContent = t('footer.tools'));
    document.querySelectorAll('[data-i18n="footerResources"]').forEach(el => el.textContent = t('footer.resources'));
    document.querySelectorAll('[data-i18n="footerCompany"]').forEach(el => el.textContent = t('footer.company'));
    document.querySelectorAll('[data-i18n="footerCopyright"]').forEach(el => el.textContent = t('footer.copyright'));
    
    // Update language toggle
    document.querySelectorAll('[data-i18n="langEnglish"]').forEach(el => el.textContent = t('langEnglish'));
    document.querySelectorAll('[data-i18n="langChinese"]').forEach(el => el.textContent = t('langChinese'));
    
    // Update Articles page
    document.querySelectorAll('[data-i18n="articles.heroTitle"]').forEach(el => el.textContent = t('articles.heroTitle'));
    document.querySelectorAll('[data-i18n="articles.heroSubtitle"]').forEach(el => el.textContent = t('articles.heroSubtitle'));
}

// Build a language <select> dropdown and insert it to replace the button-based switcher
function buildLanguageDropdown(containerEl) {
    const select = document.createElement('select');
    select.id = 'lang-select-' + Math.random().toString(36).slice(2, 7);
    select.className = 'text-sm text-gray-600 bg-white border border-gray-300 rounded px-2 py-1 cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500';
    select.setAttribute('aria-label', 'Select language');

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'zh', label: '中文' }
    ];

    languages.forEach(function(lang) {
        const option = document.createElement('option');
        option.value = lang.code;
        option.textContent = lang.label;
        if (lang.code === currentLang) option.selected = true;
        select.appendChild(option);
    });

    select.addEventListener('change', function() {
        setLanguage(this.value);
        // Sync all other dropdowns on the page
        document.querySelectorAll('.lang-switcher-select').forEach(function(el) {
            el.value = currentLang;
        });
    });

    select.classList.add('lang-switcher-select');
    containerEl.innerHTML = '';
    containerEl.appendChild(select);
}

// Initialize internationalization
function initI18n() {
    // Get saved language from localStorage or default to English
    const savedLang = localStorage.getItem('language');
    const initialLang = savedLang || detectUserLanguage();

    // Set initial language
    setLanguage(initialLang);

    // Replace button-based language switchers with <select> dropdowns
    // Each switcher is a <div> containing two [data-lang] buttons
    // We look for any parent container that has at least one [data-lang] button
    const buttonContainers = new Set();
    document.querySelectorAll('[data-lang]').forEach(function(btn) {
        if (btn.parentElement) {
            buttonContainers.add(btn.parentElement);
        }
    });

    buttonContainers.forEach(function(container) {
        buildLanguageDropdown(container);
    });
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        translations,
        setLanguage,
        t,
        initI18n
    };
} else {
    // Expose to global scope for browser usage
    window.i18n = {
        translations,
        setLanguage,
        t,
        initI18n
    };
}