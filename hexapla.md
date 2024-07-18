---
layout: none
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scrollable Table</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            height: 100vh; /* Full viewport height */
            overflow: hidden; /* Prevent body scrolling */
        }
        .table-container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            display: block;
        }
        thead, tbody {
            display: block;
        }
        tbody {
            overflow-y: auto;
            max-height: calc(100vh - 40px); /* Adjust for padding */
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
            width: calc(100% / 3); /* Divide equally into three columns */
            box-sizing: border-box;
        }
        thead th {
            background-color: #f4f4f4;
        }
    </style>
</head>
<body>
    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                    <th>Header 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet purus et tortor accumsan varius. Vivamus ultricies varius justo id tristique. Nulla egestas scelerisque diam nec rhoncus. Maecenas imperdiet nisi vel elit aliquet, sed iaculis nulla faucibus. Praesent auctor metus quis urna iaculis, sit amet dapibus ex luctus. Etiam vehicula eget lacus vitae hendrerit. Ut sed tortor quis dolor ultrices rutrum at eget metus. Etiam sit amet rhoncus ligula. Cras sit amet nibh orci. Integer finibus egestaCell 1</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet purus et tortor accumsan varius. Vivamus ultricies varius justo id tristique. Nulla egestas scelerisque diam nec rhoncus. Maecenas imperdiet nisi vel elit aliquet, sed iaculis nulla faucibus. Praesent auctor metus quis urna iaculis, sit amet dapibus ex luctus. Etiam vehicula eget lacus vitae hendrerit. Ut sed tortor quis dolor ultrices rutrum at eget metus. Etiam sit amet rhoncus ligula. Cras sit amet nibh orci. Integer finibus egestaCell 2</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet purus et tortor accumsan varius. Vivamus ultricies varius justo id tristique. Nulla egestas scelerisque diam nec rhoncus. Maecenas imperdiet nisi vel elit aliquet, sed iaculis nulla faucibus. Praesent auctor metus quis urna iaculis, sit amet dapibus ex luctus. Etiam vehicula eget lacus vitae hendrerit. Ut sed tortor quis dolor ultrices rutrum at eget metus. Etiam sit amet rhoncus ligula. Cras sit amet nibh orci. Integer finibus egestaCell 3</td>
                </tr>
                <tr>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet purus et tortor accumsan varius. Vivamus ultricies varius justo id tristique. Nulla egestas scelerisque diam nec rhoncus. Maecenas imperdiet nisi vel elit aliquet, sed iaculis nulla faucibus. Praesent auctor metus quis urna iaculis, sit amet dapibus ex luctus. Etiam vehicula eget lacus vitae hendrerit. Ut sed tortor quis dolor ultrices rutrum at eget metus. Etiam sit amet rhoncus ligula. Cras sit amet nibh orci. Integer finibus egestaCell 4</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet purus et tortor accumsan varius. Vivamus ultricies varius justo id tristique. Nulla egestas scelerisque diam nec rhoncus. Maecenas imperdiet nisi vel elit aliquet, sed iaculis nulla faucibus. Praesent auctor metus quis urna iaculis, sit amet dapibus ex luctus. Etiam vehicula eget lacus vitae hendrerit. Ut sed tortor quis dolor ultrices rutrum at eget metus. Etiam sit amet rhoncus ligula. Cras sit amet nibh orci. Integer finibus egestaCell 5</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet purus et tortor accumsan varius. Vivamus ultricies varius justo id tristique. Nulla egestas scelerisque diam nec rhoncus. Maecenas imperdiet nisi vel elit aliquet, sed iaculis nulla faucibus. Praesent auctor metus quis urna iaculis, sit amet dapibus ex luctus. Etiam vehicula eget lacus vitae hendrerit. Ut sed tortor quis dolor ultrices rutrum at eget metus. Etiam sit amet rhoncus ligula. Cras sit amet nibh orci. Integer finibus egestaCell 6</td>
                </tr>
                <tr>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet purus et tortor accumsan varius. Vivamus ultricies varius justo id tristique. Nulla egestas scelerisque diam nec rhoncus. Maecenas imperdiet nisi vel elit aliquet, sed iaculis nulla faucibus. Praesent auctor metus quis urna iaculis, sit amet dapibus ex luctus. Etiam vehicula eget lacus vitae hendrerit. Ut sed tortor quis dolor ultrices rutrum at eget metus. Etiam sit amet rhoncus ligula. Cras sit amet nibh orci. Integer finibus egestaCell 7</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet purus et tortor accumsan varius. Vivamus ultricies varius justo id tristique. Nulla egestas scelerisque diam nec rhoncus. Maecenas imperdiet nisi vel elit aliquet, sed iaculis nulla faucibus. Praesent auctor metus quis urna iaculis, sit amet dapibus ex luctus. Etiam vehicula eget lacus vitae hendrerit. Ut sed tortor quis dolor ultrices rutrum at eget metus. Etiam sit amet rhoncus ligula. Cras sit amet nibh orci. Integer finibus egestaCell 8</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet purus et tortor accumsan varius. Vivamus ultricies varius justo id tristique. Nulla egestas scelerisque diam nec rhoncus. Maecenas imperdiet nisi vel elit aliquet, sed iaculis nulla faucibus. Praesent auctor metus quis urna iaculis, sit amet dapibus ex luctus. Etiam vehicula eget lacus vitae hendrerit. Ut sed tortor quis dolor ultrices rutrum at eget metus. Etiam sit amet rhoncus ligula. Cras sit amet nibh orci. Integer finibus egestaCell 9</td>
                </tr>
                <!-- More rows can be added here -->
            </tbody>
        </table>
    </div>
</body>
</html>