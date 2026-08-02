<!doctype html>
<html class="no-js" lang="">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Title -->
    <title>Documentation - Raful Beauty Salon Slider</title>

    <link rel="stylesheet" href="css/normalize.min.css">
    <link rel="stylesheet" href="css/foundation.css">
    <link rel="stylesheet" href="css/prism.css">
    <link rel="stylesheet" href="css/main.css">

    <link href="https://fonts.googleapis.com/css?family=Muli:300,400,600,700|Raleway:300i,400,600,700" rel="stylesheet">

    <!-- Place favicon.ico in the root directory -->
    <link rel="icon" type="image/x-icon" href="favicon.ico">

</head>
<body>

<header id="site-header">
 
    <div class="row">

        <div class="large-10 large-centered columns">

            <div class="name">
                <h3>Raful Beauty Salon Slider</h3>
                <p>Premium Bootstrap Slider Package Preview Documentation</p>
            </div>

            <ul class="meta">
                <li><strong>Author:</strong> <a href="https://themeforest.net/user/alissio" target="_blank">Alissio</a></li>
                <li><strong>Live Preview:</strong> <a href="https://raful-beauty-salon.netlify.app/">View Demo</a></li>
                <li><strong>Support:</strong> <span style="font-weight: 300;">alissioteam@gmail.com</span></li>
            </ul>

            <p>Thank you for purchasing my product. <br> If you have any questions that are beyond the scope of this help file, <br> please feel free to email via my user page contact form here.<br> Thanks so much!</p>

        </div>


    </div>

</header>

<section id="site-body">

    <div id="container" class="row">

        <div id="sidebar" class="large-3 large-push-9 columns" data-magellan-expedition="fixed">

            <div class="sticky">

                <h3>Table of Contents</h3>
                <ol>
                    <li data-magellan-arrival="getting-started"><a href="#getting-started">Getting Started</a></li>
                    <li data-magellan-arrival="html-structure"><a href="#html-structure">HTML Structure</a></li>
                    <ul>
                        <li data-magellan-arrival="skeleton-details"><a href="#skeleton-details">Skeleton Details</a></li>
                    </ul>
                    <li data-magellan-arrival="css-files"><a href="#css-files">CSS Files</a></li>
                    <li data-magellan-arrival="javascript-files"><a href="#javascript-files">Javascript Files</a></li>
                    <li data-magellan-arrival="support-desk"><a href="#support-desk">Support Desk</a></li>
                    <li data-magellan-arrival="files-resources"><a href="#files-resources">Files & Resources</a></li>
                    <li data-magellan-arrival="files-resources"><a href="#php-file">PHP Code Explanation</a></li>
                    <li data-magellan-arrival="files-resources"><a href="#updates">Regular Updates</a></li>
                </ol>

            </div>

        </div>

        <div id="main-content" class="large-9 large-pull-3 columns">

            <section id="introduction" class="section" data-magellan-destination="introduction">

                <h1>Howdy!</h1>
                <p class="lead">You are a shining owner of a regular license based on Raful Beauty Salon Slider.</p>
                <p>First of all, Thank you so much for purchasing this product and for being my loyal customer. You are entitled to get free updates to this product + exceptional support (as per market policy) from the author directly.</p>
                <p>This documentation is to help you understand the product code structure. Please go through the documentation carefully to understand how this product is made and how to edit this properly. Basic HTML and CSS knowledge is required to customize.</p>

            </section>

            <section id="getting-started" class="section" data-magellan-destination="getting-started">

                <h1>1. Getting Started</h1>

                <br>

                <p>When you are ready to use this product, you must first upload the files to a local or remote server. In this regard,  unzip the package you have downloaded from themeforest. In extracted folder you can see following folders:<p>

                <h3>Package contents:</h3>

                <ul>
                    <li><strong>index.html</strong> — Main HTML file of the project. You'll upload on your server.</li>

                    <li><strong>assets</strong> — Contains all the original product files comprises of CSS, JS etc. This is the folder which you'll upload on your server after necessary modifications.</li>

                    <li><strong>documentation</strong> — Inside this folder, you will find the same documentation updated with the latest changes.</li>

                </ul>

                <p>Details regarding contents and structure of <code>product</code> folder is given below.</p>

            </section>

            <section id="html-structure" class="section"  data-magellan-destination="html-structure">

                <h1>2. HTML Structure</h1>

                <br>

                <p>This product is a responsive image slider which built with Bootstrap 5.1.3 Framework and you can customize it very easily. All of the information within the main
                    content area is nested within a header, footer and div with an class of "content". Here is the general
                    structure. Note that for brevity, I am not including content that isn’t relevant to the
                    technique.</p>

                <pre data-language="HTML Skeleton">
  <code class="language-markup">

    <!-- BEGIN  Header -->
      <header>...</header>
      <!-- END footer -->

      <!-- BEGIN  Content -->
      <div class="content">...</div>
      <!-- END Content -->

      <!-- BEGIN  Footer -->
      <footer>...</footer>
      <!-- END Footer -->

  </code>
  </pre>


            </section>
            <section id="skeleton-details" class="sub-section"  data-magellan-destination="skeleton-details">

                <h2>2.1. Skeleton Details</h2>

                <br>

                <p><code>header</code> contains the code for header details</p>
                <p><code>div class="content"</code> contains the code for content details</p>
                <p><code>footer</code> contains the code for footer details</p>

            </section>
            <section id="css-files" class="section" data-magellan-destination="css-files">

                <h1>3. CSS Files</h1>

                <br>

                <p>We're using two CSS files in this product.

                <ul>
                    <li><strong>https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css</strong> — Bootstrap Framework 5.1.3. This outsourcing CSS design file is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with responsive grid system.</li>

                    <li><strong>style.css</strong> — custom style file.</li>

                </ul>

                <p>The second file contains all of the specific stylings for the page. The file is separated into sections using:</p>

                <pre data-language="Folder Map" class="css">
/*-----------------------------------------------------------------------------------

    CSS INDEX
    ===================

    1. - FONTS

    2. - CUSTOMIZE THE CAROUSEL

    3. - RESPONSIVE

-----------------------------------------------------------------------------------*/

/* 1. - FONTS
-------------------------------------------------- */
    @font-face {
        font-family: 'Dita Sweet';
        src: url('../font/DitaSweet/DitaSweet.eot');
        src: url('../font/DitaSweet/DitaSweet.eot?#iefix') format('embedded-opentype'),
            url('../font/DitaSweet/DitaSweet.woff2') format('woff2'),
            url('../font/DitaSweet/DitaSweet.woff') format('woff'),
            url('../font/DitaSweet/DitaSweet.ttf') format('truetype'),
            url('../font/DitaSweet/DitaSweet.svg#DitaSweet') format('svg');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'DidotItalic';
        src: url('../font/DidotItalic/DidotItalic.eot');
        src: url('../font/DidotItalic/DidotItalic.eot?#iefix') format('embedded-opentype'),
            url('../font/DidotItalic/DidotItalic.woff2') format('woff2'),
            url('../font/DidotItalic/DidotItalic.woff') format('woff'),
            url('../font/DidotItalic/DidotItalic.ttf') format('truetype'),
            url('../font/DidotItalic/DidotItalic.svg#DidotItalic') format('svg');
        font-weight: normal;
        font-style: italic;
    }

/* 2. - CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

    /* Carousel base class */
    .carousel {
        height: 100vh;
    }


/* 3. - RESPONSIVE
-------------------------------------------------- */

    @media only screen and (max-width: 1160px) {
        .carousel-caption {
            left: 10%;
            right: 10%;
        }
        .carousel-title {
            font-size: 4rem;
        }
    }
</pre><br>

                <p>All styling related files of this product can be found in this folder path <code>assets/css</code></p>

                <pre data-language="Folder Map">
  <code class="language-markup">
    css/
    |
    |-- style.css
  </code>
</pre>

                <br>
                <p>
                    As it can be seen, the folder contains one <code>css</code> file.<br>
                    <code>style.css</code> custom style file.<br>
                </p>
            </section>

            <section id="javascript-files" class="section" data-magellan-destination="javascript-files">

                <h1>4. Javascript Files</h1>

                <br>

                <p>This product imports one Javascript file.</p>

                <ul>
                    <li><strong>https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js</strong> — Bootstrap Framework 5.1.3. This outsourcing file is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with responsive grid system.</li>

                </ul>

            </section>

            <section id="support-desk" class="section" data-magellan-destination="support-desk">

                <h1>5. Support Desk</h1>

                <br>

                <p>Please be reminded that you have purchased a very affordable product and you have not paid for a full-time web design agency. Occasionally, we will help with small tweaks, but these requests will be put on a lower priority due to their nature.</p>


                <section class="sub-section">

                    <h2>Support for my items includes:</h2>

                    <br>

                    <ul>
                        <li>Responding to questions or problems regarding the item and its features</li>
                        <li>Fixing bugs and reported issues</li>
                        <li>Providing updates to ensure compatibility with new software versions</li>
                    </ul>

                </section>

                <section class="sub-section">

                    <h2>Item support does not include:</h2>

                    <br>

                    <ul>
                        <li>Customization and installation services</li>
                        <li>Support for third party software and plug-ins</li>
                    </ul>

                </section>

                <section class="sub-section">

                    <h2>Before seeking support, please...</h2>

                    <br>

                    <ul>
                        <li>Make sure your question is a valid item issue and not a customization request.</li>
                        <li>Make sure you have read through the documentation or any related video guides before asking support on how to accomplish a task.</li>
                        <li>Make sure to double check the item FAQs.</li>
                        <li>If you have customized your item and now have an issue, back-track to make sure you didn't make a mistake. If you have made changes and can't find the issue, please provide us with your changelog.</li>
                        <li>Almost 80% of the time we find that the solution to people's issues can be solved with a simple "Google Search". You might want to try that before seeking support. You might be able to fix the issue yourself much quicker than we can respond to your request.</li>
                        <li>Make sure to state the name of the item you are having issues with when requesting support via ThemeForest.</li>
                    </ul>

                </section>
            </section>

            <section id="files-resources" class="section" data-magellan-destination="files-resources">

                <h1>6. Files &amp; Resources</h1>

                <br>

                <p>The product uses following resources by third parties.<p>


                <ul>
                    <li><a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/" target="_blank">Bootstrap 5.1.3</a></li>
                    <li> <strong>Font used</strong>
                        <ul>
                            <li><a href="https://www.dafont.com/dita-sweet.font" target="_blank">Dita Sweet</a></li>
                            <li><a href="https://befonts.com/didot-font.html" target="_blank">Didot Italic</a></li>
                        </ul>
                    </li>
                </ul>

            </section>

            <section id="php-file" class="section" data-magellan-destination="php-file">

                <h1>7. PHP Code Explanation</h1>

                <br>

                <p><code>index.php</code> file for deploy and init on docker container, netlify or heroku<p>

            </section>

            <section id="updates" class="section" data-magellan-destination="updates">

                <h1>9. Regular Updates</h1>

                <br>

                <p>We’re always improving our skills and knowledge so we’re making changes regularly. From bug fixes to new awesome features, updates generally come at least twice a month.<p>

                <pre class="css">

  V. 1.0.0 – 09.02.2024
  - Initial release
</pre>
            </section>

            <footer>
                <p>© Documentation - Raful Beauty Salon Slider</p>
            </footer>

        </div>

    </div>

</section>

<script src="js/vendor/jquery-1.11.2.min.js"></script>
<script src="js/prism.js"></script>
<script src="js/main.js"></script>
</body>
</html>
