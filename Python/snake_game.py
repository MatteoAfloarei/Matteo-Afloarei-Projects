#create a snake game using python and pygame
import pygame
import sys
import random

def main():
    pygame.init()
    size = (800, 600)
    screen = pygame.display.set_mode(size)
    pygame.display.set_caption("snake game")
    clock = pygame.time.Clock()
    pygame.key.set_repeat(150, 150)

    color = (0, 0, 0)
    radius = 10
    font = pygame.font.SysFont(None, 36)

    def reset_game():
        return [(400, 300)], (0, 0), (random.randint(0, 79) * 10, random.randint(0, 59) * 10)

    snake, direction, food = reset_game()
    game_over = False

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_r and game_over:
                    snake, direction, food = reset_game()
                    game_over = False
                    continue

                if not game_over:
                    if event.key == pygame.K_UP and direction != (0, 10):
                        direction = (0, -10)
                    elif event.key == pygame.K_DOWN and direction != (0, -10):
                        direction = (0, 10)
                    elif event.key == pygame.K_LEFT and direction != (10, 0):
                        direction = (-10, 0)
                    elif event.key == pygame.K_RIGHT and direction != (-10, 0):
                        direction = (10, 0)

        if not game_over and direction != (0, 0):
            new_head = (snake[0][0] + direction[0], snake[0][1] + direction[1])
            snake.insert(0, new_head)

            if new_head == food:
                food = (random.randint(0, 79) * 10, random.randint(0, 59) * 10)
            else:
                snake.pop()

            # border collision
            if new_head[0] < 0 or new_head[0] >= size[0] or new_head[1] < 0 or new_head[1] >= size[1]:
                game_over = True

            # self collision
            if new_head in snake[1:]:
                game_over = True

        screen.fill((255, 255, 255))

        for segment in snake:
            pygame.draw.rect(screen, color, (*segment, radius, radius))

        pygame.draw.rect(screen, (255, 0, 0), (*food, radius, radius))

        if game_over:
            text = font.render("Game Over! Press R to restart", True, (255, 0, 0))
            rect = text.get_rect(center=(size[0] // 2, size[1] // 2))
            screen.blit(text, rect)

        pygame.display.flip()
        clock.tick(10)

if __name__ == "__main__":
    main()