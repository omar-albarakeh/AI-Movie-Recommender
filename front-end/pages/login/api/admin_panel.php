<?php
session_start();
require 'db.php';

if (empty($_SESSION['is_admin']) || !$_SESSION['is_admin']) {
    header("Location: index.html");
    exit;
}

$userData = $pdo->query("SELECT id, username, banned FROM users WHERE id NOT IN (1, 2, 3, 4)")->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin Panel</title>
    <link rel="stylesheet" href="../styles/style.css">
</head>
<body>
    <h1>Admin Panel</h1>
    <h2>User Insights</h2>
    <table>
        <tr>
            <th>Username</th>
            <th>Status</th>
            <th>Action</th>
        </tr>
        <?php foreach ($userData as $user): ?>
            <tr>
                <td><?php echo htmlspecialchars($user['username']); ?></td>
                <td><?php echo $user['banned'] ? 'Banned' : 'Active'; ?></td>
                <td>
                    <form action="ban_user.php" method="POST" style="display:inline;">
                        <input type="hidden" name="user_id" value="<?php echo htmlspecialchars($user['id']); ?>">
                        <button type="submit"><?php echo $user['banned'] ? 'Unban' : 'Ban'; ?></button>
                    </form>
                </td>
            </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>
