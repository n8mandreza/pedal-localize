import { on, showUI } from '@create-figma-plugin/utilities'
import { ResizeWindowHandler } from './types'

export default function() {
  on<ResizeWindowHandler>(
    'RESIZE_WINDOW',
    function (windowSize: { width: number; height: number }) {
      const { width, height } = windowSize
      figma.ui.resize(width, height)
    }
  )

  showUI({
    height: 420,
    width: 320
  })

  function renderImage(imgData: Uint8Array) {
    let imageHash = figma.createImage(new Uint8Array(imgData)).hash

    if (figma.currentPage.selection.length > 0) {
      for (const node of figma.currentPage.selection) {
        if ("fills" in node) {
          node.fills = [
            { type: "IMAGE", scaleMode: "FILL",  imageHash },
          ]
        }
      }
    } else {
      const rect = figma.createRectangle()
      rect.x = figma.viewport.center.x
      rect.y = figma.viewport.center.y
      rect.resize(400, 400)
      rect.fills = [
        { type: "IMAGE", scaleMode: "FILL",  imageHash },
      ]
      figma.currentPage.appendChild(rect)
    }
  }

  async function createDate(formattedDate: any) {
    if (figma.currentPage.selection.length > 0) {
      for (const node of figma.currentPage.selection) {
        if ("characters" in node) {
          await Promise.all(
            node.getRangeAllFontNames(0, node.characters.length)
              .map(figma.loadFontAsync)
          )

          node.characters = formattedDate
        }
      }
    } else {
      await figma.loadFontAsync({ family: "Inter", style: "Regular" })
      const nodes: Array<SceneNode> = []
      const textNode = figma.createText()

      textNode.characters = formattedDate
      figma.currentPage.appendChild(textNode)
      nodes.push(textNode)
      figma.currentPage.selection = nodes
      figma.viewport.scrollAndZoomIntoView(nodes)
    }
  }

  async function createTime(formattedTime: any) {
    if (figma.currentPage.selection.length > 0) {
      for (const node of figma.currentPage.selection) {
        if ("characters" in node) {
          await Promise.all(
            node.getRangeAllFontNames(0, node.characters.length)
              .map(figma.loadFontAsync)
          )

          node.characters = formattedTime
        }
      }
    } else {
      await figma.loadFontAsync({ family: "Inter", style: "Regular" })
      const nodes: Array<SceneNode> = []
      const textNode = figma.createText()

      textNode.characters = formattedTime
      figma.currentPage.appendChild(textNode)
      nodes.push(textNode)
      figma.currentPage.selection = nodes
      figma.viewport.scrollAndZoomIntoView(nodes)
    }
  }

  async function createNumber(formattedNumber: any) {
    if (figma.currentPage.selection.length > 0) {
      for (const node of figma.currentPage.selection) {
        if ("characters" in node) {
          await Promise.all(
            node.getRangeAllFontNames(0, node.characters.length)
              .map(figma.loadFontAsync)
          )

          node.characters = formattedNumber
        }
      }
    } else {
      await figma.loadFontAsync({ family: "Inter", style: "Regular" })
      const nodes: Array<SceneNode> = []
      const textNode = figma.createText()

      textNode.characters = formattedNumber
      figma.currentPage.appendChild(textNode)
      nodes.push(textNode)
      figma.currentPage.selection = nodes
      figma.viewport.scrollAndZoomIntoView(nodes)
    }
  }

  on('IMG-DATA', renderImage)
  on('CREATE-DATE', createDate)
  on('CREATE-TIME', createTime)
  on('CREATE-NUMBER', createNumber)
}
