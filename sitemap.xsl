<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>XML Sitemap | lolyeah.github.io</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
        <style>
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #0d1117;
            color: #c9d1d9;
            line-height: 1.5;
            padding: 40px 20px;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
          }
          header {
            margin-bottom: 30px;
            border-bottom: 1px solid #21262d;
            padding-bottom: 20px;
          }
          h1 {
            color: #f0f6fc;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 10px;
          }
          p.subtitle {
            color: #8b949e;
            font-size: 0.95rem;
            margin-bottom: 15px;
          }
          .stats {
            display: flex;
            gap: 20px;
            margin-top: 15px;
          }
          .stat-card {
            background: #161b22;
            border: 1px solid #30363d;
            border-radius: 8px;
            padding: 15px 20px;
            min-width: 150px;
          }
          .stat-label {
            font-size: 0.8rem;
            color: #8b949e;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
          }
          .stat-value {
            font-size: 1.5rem;
            font-weight: 600;
            color: #58a6ff;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background: #161b22;
            border: 1px solid #30363d;
            border-radius: 8px;
            overflow: hidden;
          }
          thead {
            background-color: #21262d;
          }
          th {
            padding: 12px 16px;
            text-align: left;
            font-size: 0.85rem;
            font-weight: 600;
            color: #8b949e;
            text-transform: uppercase;
            border-bottom: 1px solid #30363d;
          }
          td {
            padding: 12px 16px;
            font-size: 0.9rem;
            border-bottom: 1px solid #21262d;
            word-break: break-all;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:hover td {
            background-color: #1f242c;
          }
          a {
            color: #58a6ff;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .badge {
            display: inline-block;
            padding: 2px 8px;
            font-size: 0.75rem;
            font-weight: 500;
            border-radius: 20px;
            background: #30363d;
            color: #c9d1d9;
          }
          .badge-high {
            background: rgba(88, 166, 255, 0.15);
            color: #58a6ff;
            border: 1px solid rgba(88, 166, 255, 0.3);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1>XML Sitemap</h1>
            <p class="subtitle">This XML Sitemap is generated automatically to help search engines like Google discover and index the content of this site. Learn more at <a href="https://sitemaps.org" target="_blank" rel="noopener noreferrer">sitemaps.org</a>.</p>
            <div class="stats">
              <div class="stat-card">
                <div class="stat-label">Total URLs</div>
                <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
              </div>
            </div>
          </header>
          
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th style="width: 120px;">Priority</th>
                <th style="width: 150px;">Change Freq</th>
                <th style="width: 150px;">Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:sort select="sitemap:priority" order="descending"/>
                <tr>
                  <td>
                    <a href="{sitemap:loc}" target="_blank">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <span class="badge">
                      <xsl:if test="sitemap:priority &gt;= 0.8">
                        <xsl:attribute name="class">badge badge-high</xsl:attribute>
                      </xsl:if>
                      <xsl:value-of select="sitemap:priority"/>
                    </span>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
